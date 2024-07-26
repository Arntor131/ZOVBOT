module.exports = {
    name: 'goal',
    description: 'Гооол!',

    callback: (client, interaction) => {
        interaction.reply({
            content: 'Гооол!',
            files: [
                'src/assets/img/goool.png'
            ]
        })
    }
}