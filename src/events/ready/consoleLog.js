const { Attachment } = require('discord.js');

module.exports = async (client) => {
    console.log(`${client.user.tag} is online`);

    await client.channels.fetch(process.env.TEST_CHANNEL_ID)
    .then(channel => {
        channel.send({
            content: 'ZOVBOT is online!',
            files: ['src/media/img/goool.png'],
        });
    });
};