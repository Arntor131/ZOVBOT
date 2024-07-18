require('dotenv').config();

const { Client, IntentsBitField } = require("discord.js");
const { Client:PSQL } = require('pg');
const { blockQuote, bold, italic, quote, spoiler, strikethrough, underline } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

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

// const postgresClient = new PSQL({
//     user: process.env.PG_USER,
//     password : process.env.PG_PASSWD,
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE,
// });

eventHandler(client);

client.login(process.env.TOKEN);