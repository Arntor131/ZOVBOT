module.exports = {
    name: 'kit-info',
    description: 'Информация про китовый сервер',
    
    callback: (client, interaction) => {
        const kitServerIp = process.env.KIT_SERVER_IP;
        const kitServerPort = process.env.KIT_SERVER_PORT;

        fetch('https://mcapi.us/server/status?ip='+kitServerIp+'&port='+kitServerPort)
            .then(response => response.json())
            .then(data => {
                
                let replyEmbed = {
                    color: 0x26edb5,
                    title: 'Китовый сервер',
                    description: `Онлайн: **${data.players.now} из ${data.players.max}** чел.`,                    
                };

                if(data.players.now != 0) {
                    let playerListField = '';     

                    for(i = 0; i < data.players.now; i++) {
                        let name = data.players.sample[i].name.replace("_", "\\_");
                        playerListField += `> **•**  ${name} \n`;                    
                    }

                    playerListField.replace('_', '\\_');
                    Object.assign(replyEmbed, {fields: [{name: 'Список игроков:', value: playerListField}]});
                }

                interaction.reply({embeds: [replyEmbed]});
        });       
    }
}