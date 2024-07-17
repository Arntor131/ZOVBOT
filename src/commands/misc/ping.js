module.exports = {
    name: 'ping',
    description: 'Ping!',
    // devOnlu: Boolean,
    // testOnly: Boolean,
    // options: [],
    // deleted: Boolean

    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping}`);
    }
}