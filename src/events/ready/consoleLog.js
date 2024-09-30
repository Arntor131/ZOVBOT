const { Attachment, EmbedBuilder, AttachmentBuilder, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const { description } = require('../../commands/moderation/ban');

const file = new AttachmentBuilder('src/assets/img/zov.png');

const onReadyEmbed = {
    color: 0x0099ff,
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
            name: 'Абоба',
            value: '[Пасхалко](https://discord.gg/rsKKzhz76U)'
        },
    ],

};

const goida = new ButtonBuilder()
    .setCustomId('testGoidaButton')
    .setLabel('Гойда')
    .setStyle(ButtonStyle.Danger);

const gooal = new ButtonBuilder()

    .setCustomId('testGoalButton')
    .setLabel('Гооол')
    .setStyle(ButtonStyle.Primary);

const testButtonRow = new ActionRowBuilder()
    .addComponents(goida, gooal);

module.exports = async (client) => {
    console.log(`${client.user.tag} is online`);

    client.user.setActivity({
        name: "Under development!",
        type: ActivityType.Custom,
    });

    await client.users.fetch(process.env.TEST_USER_ID)
    .then(testUser => {
        testUser.send("aboba");
    })

    await client.channels.fetch(process.env.TEST_CHANNEL_ID)
    .then(channel => {
        channel.send({embeds: [onReadyEmbed], files: [file], components: [testButtonRow]});
    });
};