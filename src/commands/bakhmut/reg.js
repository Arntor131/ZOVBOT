const { Client } = require('pg');
const { description } = require('../info/bot-info');

const client = new Client({
    user: process.env.PGUSER,
    password: process.env.PGPSWD,
    host: 'localhost',
    port: '5432',
    database: 'bakhmut_test'
});

client
    .connect()
    .then(() => {
        console.log('module connected to db');
    })
    .catch((err) => {
        console.error('db connection error', err);
    });



module.exports = {
    name: "reg",
    description: "Регистрация на тестовый сервер",
    callback: async (client, interaction) => {
        
    }
}