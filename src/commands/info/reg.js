const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const succsesEmbed = {
    color: 0xb6e673,
    title: 'Ваш аккаунт зарегистрирован',
    timestamp: new Date().toISOString(),
    footer: {
        text: 'ZOVBOT by Arntor131',
    }
}

module.exports = {
    name: "reg",
    description: "Регистрация на тестовый сервер",
    options: [
        {
            name: "username",
            description: "Ваш никнейм",
            required: true,
            type: ApplicationCommandOptionType.String
        }
    ],
    callback: async (client, interaction) => {
        const username = await interaction.options.get('username');
        const discordid = interaction.user.id;
        
        const regURLstring = `http://${process.env.REG_HOST}:${process.env.REG_PORT}/register/?username=${username.value}&discordid=${discordid}`;
        fetch(regURLstring)
        .then((response) => response.text())
        .then((text) => {
            console.log(text);

            let embedTitle = '';
            let embedDescription = '';
            let embedColor = 0xFFFFFF;

            if(text === 'ok') {
                embedColor = 0xb6e673;
                embedTitle = 'Ваш аккаунт успешно зарегистрирован';
                embedDescription = ` • ${username.value}`; 
            } else {
                embedColor = 0xfc532d;
                embedTitle = 'Ошибка регистрации';
                
                switch(text) {
                    case 'err_param_forbiddensymbol':
                        embedDescription = 'Никнейм может содержать только латинские буквы, цифры и нижнее подчеркивание "_"!';
                        break;

                    case 'err_username_occupied':
                        embedDescription = 'Этот никнейм уже занят';
                        break;

                    case 'err_discordid_occupied':
                        embedDescription = 'Невозможно зарегистрировать второй никнейм';
                        break;
                    
                    default:
                        embedDescription = 'Неизвестная ошибка';
                        break;
                }
            }

            const embed = {
                color: embedColor,
                title: embedTitle,
                description: embedDescription,
                timestamp: new Date().toISOString(),
                footer: {
                    text: 'ZOVBOT by Arntor131',
                }
            }

            interaction.reply({embeds: [embed]});
        })
    }
}