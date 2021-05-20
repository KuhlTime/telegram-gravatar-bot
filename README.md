<p align="center">
  <img src="assets/banner-telegram-gravatar-bot.png" alt="Banner" max-height="240px">
</p>

[![Telegram](https://img.shields.io/badge/Add%20to-Telegram-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40MTcgMTUuMTgxLS4zOTcgNS41ODRjLjU2OCAwIC44MTQtLjI0NCAxLjEwOS0uNTM3bDIuNjYzLTIuNTQ1IDUuNTE4IDQuMDQxYzEuMDEyLjU2NCAxLjcyNS4yNjcgMS45OTgtLjkzMWwzLjYyMi0xNi45NzIuMDAxLS4wMDFjLjMyMS0xLjQ5Ni0uNTQxLTIuMDgxLTEuNTI3LTEuNzE0bC0yMS4yOSA4LjE1MWMtMS40NTMuNTY0LTEuNDMxIDEuMzc0LS4yNDcgMS43NDFsNS40NDMgMS42OTMgMTIuNjQzLTcuOTExYy41OTUtLjM5NCAxLjEzNi0uMTc2LjY5MS4yMTh6IiBmaWxsPSIjMDM5YmU1Ii8+PC9zdmc+)](https://t.me/gravatar_bot)

This is a telegram bot that sends back gravatar profile pictures for the provided email address.

## 🌈 Setup

### ⛴ Docker

```bash
docker run\ 
  --name telegram-gravatar-bot\
  -e TELEGRAM_BOT_TOKEN=""\
  -e SENTRY_DSN=""\ # Optional
  ghcr.io/kuhltime/telegram-gravatar-bot:main
```

### ⚛️ Kubernetes

In order to deploy this project to Kubernetes you need to run the following command. 
Please make sure to fill in the environment variables inside the `deployment.yml` file before you go ahead.

```bash
kubectl apply -f deployment.yml
```
