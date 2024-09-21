const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'server-info',
    description: 'Информация об указанном сервере',
    options: [
        {
            name: 'host-ip',
            description: 'IP/Домен сервера',
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        {
            name: 'host-port',
            description: 'Порт сервера',
            required: true,
            type: ApplicationCommandOptionType.String,
        },
    ],
    
    callback: async (client, interaction) => {
        let serverIp = await interaction.options.get('host-ip');
        let serverPort = await interaction.options.get('host-port');

        let port = '';

        if(!serverPort) {
            port = '25565';
        } else {
            port = serverPort.value;
        }
        
        console.log(port, 1);

        serverUrl = `https://mcapi.us/server/status?ip=${serverIp.value}&port=${port}`

        let response = await fetch(serverUrl);

        if(response.ok) {
            let data = await response.json();
            
            let replyEmbed = {
                color: 0x26edb5,
                title: `Сервер ${serverIp.value}:${port}`,
                description: `Онлайн: **${data.players.now} из ${data.players.max}** чел.`,                    
            };

            let playerListField = ''

            if(data.players.sample.length != data.players.now) {
                playerListField += 'Невозможно получить список игроков\n';
                console.log('unable to get players');
            } else {
                console.log('getting players');
                for(let i = 0; i < data.players.now; i++) {
                    let name = data.players.sample[i].name.replace("_", "\\_");
                    playerListField += `> **•**  ${name} \n`;
                }
            }

            playerListField.replace('_', '\\_');
            Object.assign(replyEmbed, {fields: [{name: 'Список игроков:', value: playerListField}]});
            
            interaction.reply({embeds: [replyEmbed]});

        } else {
            console.log("BRUUUUHTTP");
            console.log(serverUrl); 
            interaction.reply('bruh');
        } 
    }
}