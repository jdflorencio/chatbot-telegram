const TelgramBot = require("node-telegram-bot-api");

class TelegramBot {
    constructor(token) {
        this.bot = new TelgramBot(token, { polling: true }); //usar webhook
    }

    onMessage(callback) {
        this.bot.on('message', callback);
    }

    sendMessage(chatId, message) {
        this.bot.sendMessage(chatId, message);
    }
}

module.exports = TelegramBot;
