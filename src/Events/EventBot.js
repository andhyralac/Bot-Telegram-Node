const { Context } = require('telegraf')

class EventBot{

    /**
     * Function to respond when a sticker is sent
     * @param {*} ctx 
     */
    onSticker(ctx = Context){
        let stickerToSend;
        const { set_name } = ctx.update.message.sticker;

        stickerToSend = set_name === 'HotCherry' 
            ? 'https://tlgrm.es/_/stickers/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/192/15.webp' 
            : 'https://tlgrm.es/_/stickers/182/af4/182af458-864d-3756-9525-c4bbe46f7426/192/16.webp';

        ctx.reply('Oh!! te gustan los sticker');
        ctx.replyWithSticker(stickerToSend);
    }

    /**
     * Function to detect that it is an emoji
     * @param {*} ctx 
     */
    onEmoji(ctx = Context){
        const expreg = /^[A-Z]+$/i;
        const emoji = ctx.update.message.text;

        if (!expreg.test(emoji)){
            ctx.reply(emoji);
        }
    }
}

const eventBot = new EventBot();

module.exports = eventBot;