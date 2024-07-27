const { Attachment, EmbedBuilder, AttachmentBuilder } = require('discord.js');

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
};

module.exports = {
    name: 'bot-info',
    description: 'Общая информация о приложении ZOVBOT',
    
    callback: (client, interaction) => {
        interaction.reply({embeds: [replyEmbed]});
    }
}