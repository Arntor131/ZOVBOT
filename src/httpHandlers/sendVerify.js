const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

const confirm = new ButtonBuilder()
    .setCustomId('sessionConfirmButton')
    .setLabel('Подтвердить')
    .setStyle(ButtonStyle.Success);

const decline = new ButtonBuilder()

    .setCustomId('sessionDeclineButton')
    .setLabel('Отклонить')
    .setStyle(ButtonStyle.Secondary);

const buttonRow = new ActionRowBuilder()
    .addComponents(confirm, decline);

module.exports = async (request, response, client) => {
    console.log('received verify request');

    const ip = request.query.ip;
    const discordid = request.query.discordid;

    const token = request.query.token;

    await client.users.fetch(discordid)
    .then(user => {
        user.send({
            content: "Подтвердите создание новой игровой сессии для IP " + ip,// + ' \ntoken: ' + token,
            components: [buttonRow], 
        });
        response.end('ok');
    })
}