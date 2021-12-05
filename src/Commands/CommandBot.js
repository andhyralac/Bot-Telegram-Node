const { Context } = require('telegraf')

class CommandBot {

    /**
     * Function to start the bot
     * @param {*} ctx 
     */
    start(ctx = Context){
        ctx.reply(`
            Para interactura selecciona o escribe los comandos
            que estan resaltado.

            /start - para iniciar el bot
            /Hola - para saludar al bot

            Para mencionar al Bot utilizar el @ seguido del
            nombre AndhyBot.
        `)
    }


    /**
     * Function for welcom in the bot
     * @param {*} ctx 
     */
    helloBot(ctx = Context){
        const { first_name, last_name } = ctx.from;
        ctx.reply(`Hola que tal!!. ${(first_name + " " + last_name).toUpperCase()}`);
        ctx.replyWithSticker('https://tlgrm.es/_/stickers/8a1/9aa/8a19aab4-98c0-37cb-a3d4-491cb94d7e12/192/21.webp');
    }

    /**
     * Function that detects when they have mentioned the name of Bot
     * @param {*} ctx 
     */
    mentionBot(ctx = Context){
        const { first_name } = ctx.from;
        ctx.reply(`${(first_name).toUpperCase()} has mencionado mi nombre!!`);
        ctx.replyWithSticker('https://tlgrm.es/_/stickers/8a1/9aa/8a19aab4-98c0-37cb-a3d4-491cb94d7e12/192/19.webp');
    }

}

const commandBot = new CommandBot()

module.exports = commandBot;