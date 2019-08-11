const Telegraf = require('telegraf')
const Telegram = require('telegraf/telegram')
const devOpsChatId = '-351202985';

let botTelegraf = null;
let botTelegram = null;

const init = token => {
    botTelegraf = new Telegraf(token);
    botTelegram = new Telegram(token);
    botTelegraf.startPolling();
}

const listen = () => {
    botTelegraf.hears('hi', (ctx) => ctx.reply('Hey there'))
    botTelegraf.command('oldschool', (ctx) => ctx.reply('Hello'));
    botTelegraf.on(['sticker', 'photo', 'group_chat_created', 'channel_chat_created'], (ctx) => {
        console.log(ctx)
        return ctx.reply('Cool!')
    })
}

const sendCircleMessage = (chatId, circleObject) => {
    botTelegram.sendMessage(
        chatId,
        `A job has been completed: ${circleObject.reponame}.
        Branch: ${circleObject.branch}.
        URL: ${circleObject.build_url}.
        Status: Succeed
        `
    );
}

module.exports = {init, listen , sendCircleMessage};