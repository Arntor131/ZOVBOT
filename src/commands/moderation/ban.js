const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Ban player',
    // devOnlu: Boolean,
    // testOnly: Boolean,
     options: [
        {
            name: "target-user",
            description: "User to ban",
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: "ban-reason",
            description: "Reason for ban",
            type: ApplicationCommandOptionType.String,
        }

     ],

    callback: (client, interaction) => {
        interaction.reply(`Бан нахуй!`);
    }
}