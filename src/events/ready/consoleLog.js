module.exports = async (client) => {
    console.log(`${client.user.tag} is online`);

    await client.channels.fetch(process.env.TEST_CHANNEL_ID)
    .then(channel => {
        console.log(channel.name);
        channel.send('ZOVBOT is online');
    });
};