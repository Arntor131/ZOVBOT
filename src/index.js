require('dotenv').config();

const express = require('express');

const { Client, IntentsBitField, EmbedBuilder, bold } = require("discord.js");
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

app.get('/message', expressAsyncHandler( async (request, response) => {
    const message = request.query.author + ': ' + request.query.message;

    await client.channels.fetch(process.env.BRIDGE_CHANNEL_ID)
    .then(channel => {
        channel.send(message);
        response.end('ok');
    });
}));

app.get('/sendconfirmmessage', expressAsyncHandler( async (request, response) => {
    func = require('./httpHandlers/sendVerify');
    func(request, response, client);
}));

// app.get('/sendconfirmmessage', expressAsyncHandler(async (request, response) => {

// }));

app.get('/test', expressAsyncHandler(async(request, response) => {
    console.log('received /test request from ');
    response.end('ok');
}));

app.post("/", urlencodedParser, (request, response) => {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${response.body.userMessage} - ${response.body.userName}`);
});

eventHandler(client);

client.login(process.env.TOKEN);
app.listen(3201);