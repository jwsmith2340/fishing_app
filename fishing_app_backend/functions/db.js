const pool = require('../database/databasepg');

async function recs(query) {

    let response = [];

    await pool.query(query)
        .then(res => response.push(res.rows))
        .catch(e => console.error(e.stack));

    return response;

}

// This isn't working at all
async function insert(table, columns, values) {

    let insert_stmt = `INSERT INTO ${table} ${columns} VALUES (${values});`;

    await pool.query(insert_stmt, (err, res) => {
        console.log(err, res);
        pool.end();
    });

    return;

};

module.exports = { recs, insert };