const pool = require('../database/databasepg');

async function recs(query) {

    let response = [];

    await pool.query(query)
        .then(res => response = res.rows)
        .catch(e => console.error(e.stack));

    return response;

}

module.exports = { recs };