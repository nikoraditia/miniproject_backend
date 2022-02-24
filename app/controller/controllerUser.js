const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const db = require('../../config/database') 

//mendaftarkan user
async function insertUser (req, res) {

    // let value = req.body.password;
    // const salt = await bcrypt.genSalt(10);
    // value = await bcrypt.hash(value, salt)

    let data = [
        req.body.name,
        req.body.password,
        req.body.address,
        req.body.phone_number,
    ]

    let insertQuery = `INSERT INTO tableuser (name, password, address, phone_number) VALUES (?,?,?,?);`
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;       
    });
    res.send({ message: 'Data has been inserted', data: data })
}

//menampilkan daftar user
function listUser(req, res) {
    let selectQuery = `SELECT * FROM tableuser WHERE id = ?`
    let data = [req.params.id]

    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}

//mengupdate nomor telepon dan alamat
function updateUser(req, res) {
    let updateQuery = `UPDATE tableuser SET phone_number = ?, address = ? WHERE id = ?`
    let data = [req.body.phone_number, req.body.address, req.params.id]  
    
    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

//menghapus data user
function deleteUser(req, res) {
    let deleteQuery = `DELETE FROM tableuser WHERE id = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertUser,
    listUser,
    updateUser,
    deleteUser
}