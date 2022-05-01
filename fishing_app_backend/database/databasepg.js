const {Client} = require('pg');

const pool = new Client({

    host: "localhost",
    user: "postgres",
    port: 8000,
    password: "761349mpd",
    database: "FISHING",

});

pool.connect();

// pool.query(`SELECT * FROM TEST`, (err, res) => {

//     //console.log(res)

//     pool.end

// });

module.exports = pool;