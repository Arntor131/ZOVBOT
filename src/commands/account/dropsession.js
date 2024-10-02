require('dotenv').config();

module.exports = {
    name: 'dropsession',
    description: 'Сбросить игровую сессию',

    callback: async (client, interaction) => {
        const discordid = interaction.user.id;

        const dropSessionURL = `http://${process.env.REG_HOST}:${process.env.REG_PORT}/dropsession/${discordid}`;

        fetch(dropSessionURL)
        .then(response => response.text())
        .then(text => {
            interaction.reply(text);
        })
        .catch(err => {
            interaction.reply('bruh');
            console.log(err);
        })
    }
}