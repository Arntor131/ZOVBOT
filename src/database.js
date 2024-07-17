require('./1.js');
require('./2.js');
require('./3.js');
const { Client:PSQL } = require('pg');

const postgresClient = new PSQL({
    user: 'postgres',
    password : '1488',
    host: '192.168.88.179',
    port: '5432',
    database: 'zb_users'
});

postgresClient
    .connect()
    .then(() => {
        console.log(`Connected`);
    })
    .catch((err) => {
        console.error('B.R.U.H', err);
    });

postgresClient.query('SELECT * FROM users WHERE id = 2;', (err, result) => {
    if(err) {
        console.error('BRUH 2', err);
    } else {
        

        if(result.rows.length === 0)
        {
            console.log('bruh');
        } else {
            console.log('Query result:', typeof(result.rows[0]));
            console.log(result.rows[0].name);
        }

    }

    //let name1 = JSON.stringify(result.rows[0]);

    //console.log(name1.name);
})