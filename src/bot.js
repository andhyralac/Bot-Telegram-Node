require('dotenv').config()

const { bot } = require('./Config/ConfigBot');
const commandBot = require('./Commands/CommandBot');
const eventBot = require('./Events/EventBot');

// COMMANDS OF BOT
bot.start(commandBot.start);
bot.command('Hola', commandBot.helloBot);
bot.mention('AndhyBot', commandBot.mentionBot);

// EVENTS OF BOT
bot.on('sticker', eventBot.onSticker);
bot.on('text', eventBot.onEmoji);

// START OF BOT
bot.launch()