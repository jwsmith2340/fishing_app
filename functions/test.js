const db = require('../database/databasepg');

//##########################################################

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

// Parametrized query

// Callback function
db.query(text, values, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0])
    }
});

// Promise
db.query(text, values).then(res => console.log(res.rows[0]).catch(e => console.log(e.stack)));

// async/await
try {
    let response = await db.query(text, values)
    console.log(response.rows[0]);
} catch (err) {
    console.log(err.stack)
}