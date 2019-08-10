const TelegramBot = require('node-telegram-bot-api');

const telegramToken = process.env.TELEGRAM_TOKEN || '933318192:AAGw_fJIliEBhb1J_qq0eOPZAESHHwiOCiQ';
const bot = new TelegramBot(telegramToken, { polling: true });

bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Ill have the tuna. No crust.');
});