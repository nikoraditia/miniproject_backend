const db = require('../config/database') 
 
let updateQuery = `UPDATE store SET quantity = ? WHERE id = ?`
let data = ['5', 1]
db.query(updateQuery, data, function (err, updated) {
  if (err) throw err;
  console.log(updated);
});
