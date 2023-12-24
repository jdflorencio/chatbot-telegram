class MessageHandler {
    constructor(telegramBot, dialogflowManager) {
      this.telegramBot = telegramBot
      this.dialogflowManager = dialogflowManager
    }
  
    handle(msg) {
      const chatId = msg.chat.id;
      console.log(msg.text);

      let resultado = this.dialogflowManager.sendMessage(chatId, msg.text);
      this.telegramBot.sendMessage(chatId, 'Obrigado por sua mensagem');

    }
  }
  
  module.exports = MessageHandler;
  