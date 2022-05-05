const {Client} = require('pg');

const pool = new Client({

    host: "localhost",
    user: "postgres",
    port: 8000,
    password: "761349mpd",
    database: "FISHING",

});

pool.connect();

module.exports = pool;