const {Client} = require('pg');

const db = new Client({

    host: "localhost",
    user: "postgres",
    port: 8000,
    password: "761349mpd",
    database: "FISHING",

});

db.connect();

// db.query(`SELECT * FROM TEST`, (err, res) => {

//     //console.log(res)

//     db.end

// });

module.exports = db;