var mysql  = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Apaajaboleh123',
  database : 'miniproject',
  port     : '3306'
});

module.exports = db;
