const { Attachment, EmbedBuilder, AttachmentBuilder } = require('discord.js');

const zovImg = new AttachmentBuilder('src/assets/img/zov.png');
const pskImg = new AttachmentBuilder('src/assets/img/psk.png');

replyEmbed = {
    color: 0xff6c6c,
    title: 'ZOVBOT',
    url: 'https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html',
    author: {
        name: 'Arntor131',
        icon_url: 'https://avatars.githubusercontent.com/u/118988025?s=400&u=2568010e276fa8a0e214ce1c190d7793bf46b91c&v=4',
        url: 'https://github.com/ARNTOR131',
    },
    description: 'Standart Paskhalko bot',
    thumbnail: {
        url: 'attachment://zov.png',
    },
    fields: [
        {
            name: 'One bot to rule them all!',
            value: '**ZOVBOT** - бот, предназначенный для использования на сервере "[**Paskhalko**](https://discord.gg/rsKKzhz76U)" в целях администрирования сервера и обеспечения взаимодействия игроков с системой Paskhalko.\n\n  На данный момент бот находится в состоянии активной разработки и может работать нестабильно'
        },
    ],
    image: {
        url: 'attachment://psk.png'
    }
};

module.exports = {
    name: 'bot-info',
    description: 'Общая информация о приложении ZOVBOT',
    
    callback: (client, interaction) => {
        interaction.reply({embeds: [replyEmbed], files: [zovImg, pskImg]});
    }
}