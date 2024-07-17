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

eventHandler(client);

client.login(process.env.TOKEN);