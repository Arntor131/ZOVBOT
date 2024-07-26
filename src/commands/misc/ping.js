module.exports = {
    name: 'ping',
    description: 'Ping!',

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}`);
    }
}