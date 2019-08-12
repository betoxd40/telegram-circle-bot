const Telegraf = require('telegraf')
const Telegram = require('telegraf/telegram')

let botTelegraf = null;
let botTelegram = null;

const init = token => {
    botTelegraf = new Telegraf(token);
    botTelegram = new Telegram(token);
    botTelegraf.startPolling();
}

const listen = () => {
    botTelegraf.on(['sticker', 'photo', 'group_chat_created', 'channel_chat_created'], (ctx) => {
        console.log(ctx)
        return ctx.reply('Cool!')
    })
}

const sendCircleMessage = (chatId, circleObject) =>
    botTelegram.sendMessage(
        chatId,
        `A job has been completed: ${circleObject.reponame}.
        Repo URL: ${circleObject.repourl}.
        Username: ${circleObject.username}.
        Branch: ${circleObject.branch}.
        Status: ${circleObject.status} ${circleObject.status === 'succeed' ? '✅' : '❌'}.
        Circle URL: ${circleObject.build_url}.
        `
    );

module.exports = {init, listen , sendCircleMessage};