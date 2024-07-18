const { devs, testServer} = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client, interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find(
            (cmd) => cmd.name === interaction.commandName
        );

        if(!commandObject) return;

        if(commandObject.devOnly) {
            if(!devs.includes(interaction.member.id)) {
                interaction.reply({
                    content: 'Only devs can run this command',
                    ephemeral: true,
                });
            }
        }

        if(commandObject.testOnly)
        {
            if(!interaction.guild.id === testServer) {
                interaction.reply({
                    content: 'This command allow only on test server',
                    ephemeral: true,
                });
            }
        }

        if(commandObject.permissonsRequired?.length) {
            for(const permission of commandObject.permissonsRequired) {
                if(!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: 'Not enough permissions.',
                        ephemeral: true,
                    });
                    return;
                }

            }
        }

        if(commandObject.botPermissons?.length) {
            for(const permission of commandObject.botPermissons) {
                const bot = interaction.guild.members.me;

                if(!bot.permission.has(permission)) {
                    interaction.reply({
                        content: "I don't have enough perms.",
                        ephemeral: true,
                    });
                    continue;
                }
            }
        }

        await commandObject.callback(client, interaction);

    } catch (error) {
        console.log(`BRUH occured running this command ${error}`);
    }
}; 