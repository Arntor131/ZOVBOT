console.log("Starting timer");

module.exports = (client) => {

    counter = 0;

    var intervalId = setInterval(async () => {
        await client.channels.fetch(process.env.TEST_CHANNEL_ID)
        .then(channel => {

            const kitServerIp = process.env.KIT_SERVER_IP;
            const kitServerPort = process.env.KIT_SERVER_PORT;

            fetch('https://mcapi.us/server/status?ip='+kitServerIp+'&port='+kitServerPort)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
            
                    // let infoMessage = `Сейчас на сервере находится **${data.players.now}** **из** **${data.players.max}** игроков \n`;
                    // for(let i = 0; i < data.players.now; i++) {
                    //     let name = data.players.sample[i].name.replace("_", "\\_");
                    //     infoMessage += `> **•**  ${name} \n`;
                    // }

                    //infoMessage.replace('_', '\\_');
                    //channel.setName(` Онлайн: ${data.players.now} чел.`);
                    console.log('aboba');
        });       
        });

        counter++;
    }, 5000);
};