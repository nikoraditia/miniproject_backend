const db = require('../config/database.js')

let createQueryUser = `
CREATE TABLE IF NOT EXISTS tableUser (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    join_date DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    phone_number INT(20) NOT NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQueryUser, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been created');
});

let createQueryProduct = `
CREATE TABLE IF NOT EXISTS Product (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    quantity INT(10) NOT NULL,
    price INT(10) NOT NULL,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
	updatedAt DATETIME NULL,
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`

db.query(createQueryProduct, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been created');
});


let alterQuery = "DROP TABLE pet";

db.query(alterQuery, function (error, results, fields) {
    if (error) throw error;
    console.log('Table has been droped ');
});
