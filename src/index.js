require('dotenv').config();

//const http = require("http");
const express = require('express');

const { Client, IntentsBitField } = require("discord.js");
const eventHandler = require('./handlers/eventHandler');
const expressAsyncHandler = require('express-async-handler');

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

// const server = http.createServer((request, response) => {
//     response.end("ZOVBot http works fine");
// })

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

app.get("/", (_, response) => {
    response.sendFile("/html/index.html", {root: __dirname});
    
});

app.get('/bruh', expressAsyncHandler( async (_, response) => {
    await client.channels.fetch(process.env.TEST_CHANNEL_ID)
    .then(channel => {
        channel.send('Негры пидарасы');
    });
}));

app.post("/", urlencodedParser, (request, response) => {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${response.body.userMessage} - ${response.body.userName}`);
});

eventHandler(client);

client.login(process.env.TOKEN);
app.listen(3201);