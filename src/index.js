require('dotenv').config();
const { Client, IntentsBitField } = require("discord.js");
const { Client:PSQL } = require('pg');
const { blockQuote, bold, italic, quote, spoiler, strikethrough, underline } = require('discord.js');
//const config = require("./config.json");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.DirectMessages,
        IntentsBitField.Flags.DirectMessageTyping
    ]
});

const postgresClient = new PSQL({
    user: 'postgres',
    password : '1488',
    host: '192.168.88.179',
    port: '5432',
    database: 'zb_users'
});

client.on('ready', (c) => {
    console.log('The bot started correctly');
});

postgresClient
    .connect()
    .then(() => {
        console.log(`Bot connected to database`);
    })
    .catch((err) => {
        console.error('B.R.U.H', err);
    });

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'botinfo')
    {
        interaction.reply('This is ZOVBOT, discord bot that was created by A_131 to be used on server "Paskhalko"');
        return;
    }

    if(interaction.commandName === 'ping')
    {
        interaction.reply('pong');
        return;
    }

    if(interaction.commandName === 'gol')
    {
        interaction.reply('ГООООООЛ!');
        return;
    }

    if(interaction.commandName === 'sum')
    {
        //console.log(interaction);

        const num1 = interaction.options.get('first-num');
        const num2 = interaction.options.get('second-num');

        console.log(num1);
        return;
    }

    if(interaction.commandName === 'kit-info')
    {
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

        return;
    }

    if(interaction.commandName === 'psk-me')
    {
        console.log(interaction);

        let replyMessage = '';
        
        postgresClient.query(`SELECT * FROM users WHERE discordid = ${interaction.user.id};`, (err, result) => {
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
});

client.on('messageCreate', (message) => {
    //console.log(message.content);
    if(message.content.includes('14') && message.content.includes('88'))
    {
        message.reply("ПАСХАЛКО!!! \nПАСХАЛКО!!!");
        console.log("ПАСХАЛКО!!!");
        console.log(message);
    }
});

client.login(process.env.TOKEN);