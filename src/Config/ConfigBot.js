const { Telegraf } = require('telegraf');


const bot = new Telegraf(process.env.TOKEN_API_TELEGRAM);

module.exports = {
    bot
}