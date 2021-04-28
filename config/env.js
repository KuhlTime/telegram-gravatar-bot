const path = require('path')
const dotenv = require('dotenv')
const Joi = require('joi')

const envPath = path.join(__dirname, '../.env')
dotenv.config({ path: envPath })

const envVarsSchema = Joi.object().keys({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  TELEGRAM_BOT_TOKEN: Joi.string().required(),
  SENTRY_DSN: Joi.string().uri()
}).unknown()

const {value: envVars, error} = envVarsSchema.prefs({errors: {label: 'key'}}).validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  nodeEnv: envVars.NODE_ENV,
  telegramBotToken: envVars.TELEGRAM_BOT_TOKEN,
  sentryDsn: envVars.SENTRY_DSN
}
