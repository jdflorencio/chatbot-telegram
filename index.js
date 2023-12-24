// index.js
const TelegramBot = require('./core/telegramBot');
const MessageHandler = require('./core/messageHandler');
const DialogflowManager = require('./core/dialogflowManager');
require('dotenv').config();

const token = process.env.TOKEN_TELEGRAM;

const telegramBot = new TelegramBot(token);
const dialogflow = DialogflowManager({
    project_id: process.env.PROJECT_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL
})
const messageHandler = new MessageHandler(telegramBot, dialogflow);

telegramBot.onMessage(messageHandler.handle.bind(messageHandler));
