require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const psk_commands = [
    {
        name: 'gol',
        description: 'Information about ZOVBOT'
    },
    {
        name: 'sum',
        description : 'sum two numbers',
        options : [
            {
                name: 'first-num',
                description: 'The 1st number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-num',
                description: 'The 2nd number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            }
        ]
    },
    // {
    //     name: 'getplayers',
    //     description: 'get info about players',
    //     options: [
    //         {
    //             name: 'server-ip',
    //             description: 'Server IP',
    //             type: ApplicationCommandOptionType.String,
    //             required: true,
    //         },
    //         {
    //             name: 'server-port',
    //             description: 'Server port',
    //             type: ApplicationCommandOptionType.String,
    //             required: true,
    //         }
    //     ]
    // }
]

const global_commands = [
    {
        name: 'botinfo',
        description: 'Information about ZOVBOT'
    },
    {
        name: 'ping',
        description: 'pong'
    },
    {
        name: 'kit-info',
        description: 'Информация про китовый сервер'
    },
    {
        name: 'psk-me',
        description: 'Предоставляет информацию о вашей уч.записи в системе Paskhalko'
    }
]

const rest = new REST(/*{ version: 'v10' }*/).setToken(process.env.TOKEN);

(async () => {
    try {

        console.log(typeof(psk_commands));
        console.log('Paskhalko slash commands registering...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: psk_commands }
        );

        console.log('Paskhalko slach commands registered succesfully');
    } catch (error) {

        console.log(`bruh psk \n bruh reason: ${error}`);

    }
})();

(async () => {
    try {
        console.log(typeof(global_commands));
        console.log('Global slash commands registering');
        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: global_commands }
        );
        console.log('Global slash commands registered succesfully');
    } catch (error) {
        console.log(`bruh global\n bruh reason: ${error}`);
    }
})();

