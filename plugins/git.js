const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/GBvOgdI.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater by FAROOKSER*
*owner number wa.me/919188636883*
*bot setting video :https://youtu.be/WrwRWAdw_hY
*githublink       https://github.com/farook-kollam/jewel*
*audio commads    https://github.com/farook-kollam/jewel/tree/master/uploads*
*sticker commads  https://github.com/farool-kollam/jewel/tree/master/uploads*
`}) 

}));
