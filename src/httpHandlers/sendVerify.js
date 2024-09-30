const { ButtonBuilder, ButtonStyle, SlashCommandBuilder, ActionRowBuilder } = require('discord.js');

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

    await client.users.fetch(request.query.id)
    .then(user => {
        user.send({
            content: "Подтвердите создание новой игровой сессии для IP " + request.query.ip,
            components: [buttonRow], 
        });
        response.send('ok');
    })
}