const db = require('../config/database') 

let data = [
	{name: "Dog"},
	{name: "Cat"},
	{name: "Snake"},
]

data.forEach(value => {
	let insertQuery = `INSERT INTO pet (name) VALUES (?);`
	db.query(insertQuery, value.name, function (error, results, fields) {
		if (error) throw error;
		console.log('Data has been inserted');
	});
});

let data = [
	[ 4,  "Available",  1],
	[ 4,  "Available",  2],
	[ 4,  "Available",  3],
]

data.forEach(value => {
	let insertQuery = `INSERT INTO store (quantity, status, petId) VALUES (?,?,?);`
	db.query(insertQuery, value, function (error, results, fields) {
		if (error) throw error;
		console.log('Data has been inserted');
	});
	console.log(value);
});

