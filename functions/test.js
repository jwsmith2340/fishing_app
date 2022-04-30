const db = require('../database/databasepg');

// This page isn't being exported, it is just here to serve to show examples of common query and insert/ update formats
// used natively by node-postgres. The full documentation for this page: https://node-postgres.com/features/queries

// Select statements to query from the DB:

// Callback Function
db.query('SELECT * FROM TEST', (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });

// Promise
db.query(`SELECT * FROM TEST`).then(res => console.log(res.rows[0])).catch(e => console.error(e.stack));

// ###########################################################

// Parametrized queries

// in these examples, 'text' is the query, and 'values' are the values in an array: 
let text = `INSERT INTO TEST (name, user_statement) VALUES ($1, $2)`;
let values = ['A name', 'Some type of statement'];

// Callback function
db.query(text, values, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

// Promise
db.query(text, values).then(res => console.log(res.rows[0]).catch(e => console.log(e.stack)));

// async/await
try {
    let response = await db.query(text, values);
    console.log(response.rows[0]);
} catch (err) {
    console.log(err.stack);
}