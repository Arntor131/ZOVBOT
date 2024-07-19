module.exports = {
    name: 'kit-info',
    description: 'Информация про китовый сервер',
    
    callback: (client, interaction) => {
        const kitServerIp = process.env.KIT_SERVER_IP;
        const kitServerPort = process.env.KIT_SERVER_PORT;

        fetch('https://mcapi.us/server/status?ip='+kitServerIp+'&port='+kitServerPort)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            
                let replyMessage = `Сейчас на сервере находится **${data.players.now}** **из** **${data.players.max}** игроков \n`;
                for(let i = 0; i < data.players.now; i++) {
                    let name = data.players.sample[i].name.replace("_", "\\_");
                    replyMessage += `> **•**  ${name} \n`;
                }

                replyMessage.replace('_', '\\_');
                interaction.reply(replyMessage);
        });       
    }
}