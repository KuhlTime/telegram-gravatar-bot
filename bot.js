const TelegramBot = require('node-telegram-bot-api')
const env = require('./config/env')
const axios = require('axios')
const gravtar = require('gravatar')

require('./config/sentry')

const bot = new TelegramBot(env.telegramBotToken, {polling: true})

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function isValidEmail(value) {
  return emailRegex.test(String(value).toLowerCase())
}

async function getBufferFromUrl(url) {
  const res = await axios.get(String(url), { responseType: 'arraybuffer' })
  return Buffer.from(res.data, 'binary')
}

bot.onText(/\/start/, msg => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, 'Welcome to the Gravatar Bot. Just send me an email address and i will search for a gravatar.')
})

bot.onText(emailRegex, msg => {
  const chatId = msg.chat.id
  const potentialEmail = msg.text

  if (!potentialEmail) {
    bot.sendMessage(chatId, 'Unable to process send data.')
    return
  }

  if (!isValidEmail(potentialEmail)) {
    bot.sendMessage(chatId, 'The send text is not a valid email.')
    return
  }

  const email = potentialEmail
  const url = gravtar.url(email, { protocol: 'https', size: '2048', d: '404' })

  bot.sendMessage(chatId, 'Please wait...')

  getBufferFromUrl(url)
    .then(buffer => {
      bot.sendPhoto(chatId, buffer, { caption: url })
    })
    .catch(error => bot.sendMessage(chatId, `Could not find Image for ${email}`))
})

bot.on('text', msg => {
  const chatId = msg.chat.id

  if (!isValidEmail(msg.text ?? '') && msg.text != '/start') {
    bot.sendMessage(chatId, 'Invalid email address')
  }
})
