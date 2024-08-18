module.exports = {
    name: 'goida',
    description: 'Гойда, братья!',

    callback: (client, interaction) => {
        interaction.reply({
            content: 'ГОЙДА!',
            files: [
                'src/assets/gif/goida.gif'
            ]
        })
    }
}