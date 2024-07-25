const { ApplicationCommandOptionType } = require("discord.js");
const { description } = require("../moderation/ban");

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
        const serverIp = await interaction.options.get('host-ip');
        const serverPort = await interaction.options.get('host-port');

        serverUrl = `https://mcapi.us/server/status?ip=${serverIp.value}&port=${serverPort.value}`

        let response = await fetch(serverUrl);

        if(response.ok) {
            let data = await response.json();
            
            let replyMessage = `Сейчас на сервере находится **${data.players.now}** **из** **${data.players.max}** игроков \n`;

            if(data.players.sample.length != data.players.now) {
                replyMessage += 'Невозможно получить список игроков\n';
                console.log('unable to get players');
            } else {
                console.log('getting players');
                for(let i = 0; i < data.players.now; i++) {
                    let name = data.players.sample[i].name.replace("_", "\\_");
                    replyMessage += `> **•**  ${name} \n`;
                }
            }

            replyMessage.replace('_', '\\_');
            interaction.reply(replyMessage);

        } else {
            console.log("BRUUUUHTTP");
            interaction.reply('bruh');
        }

        //interaction.reply('bruh');
    //     fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
    //         .then(response => {
    //             if(response.ok) {
    //                 return response.json();
    //             } 
    //             interaction.reply('bruuuuh');
    //             return;
    //         })
    //         .then(data => {
    //             console.log(data);
            
    //             let replyMessage = `Сейчас на сервере находится **${data.players.now}** **из** **${data.players.max}** игроков \n`;
    //             for(let i = 0; i < data.players.now; i++) {
    //                 let name = data.players.sample[i].name.replace("_", "\\_");
    //                 replyMessage += `> **•**  ${name} \n`;
    //             }

    //             replyMessage.replace('_', '\\_');
    //             interaction.reply(replyMessage);
    //     });       
    }
}