const db = require('../database/databasepg');

let response = db.query('SELECT * FROM TEST', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  });