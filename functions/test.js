const db = require('../database/databasepg');

db.query('SELECT * FROM TEST', (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows[0]);
    }
  });

let array = ['this', 3, 'is', 4, 'a_mess'];

console.log(array);

