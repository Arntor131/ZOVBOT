module.exports = {
    name: 'me',
    description: 'Информация о вашей уч. записи в системе Paskhalko',
    deleted: true,
    
    callback: (client, interaction) => {
        let replyMessage = '';
        
        pgClient.query(`SELECT * FROM users WHERE discordid = ${interaction.user.id};`, (err, result) => {
            if(err) {
                console.error('BRUH 2', err);
            } else {
                console.log('Query result:', typeof(result.rows[0]));
                console.log(result.rows[0]);

                if(result.rows.length === 0) {
                    console.log('Undocumented user issued "psk-me" command');
                    replyMessage = ('Не удалось получить информацию о вашей учетной записи, т.к. записи для вашего ID не существует.');
                    interaction.reply(replyMessage);
                    return;
                } else {
                    replyMessage += ('Информация о вашей учетной записи:\n');
                    replyMessage += (`> _Имя:_ ${result.rows[0].name}\n`);
                    replyMessage += (`> _Фамилия:_ ${result.rows[0].surname}\n`);
                    replyMessage += (`> _Никнейм:_ ${result.rows[0].minecraftname}\n`);

                    interaction.reply(replyMessage);
                }
            }
        })        
    }
}