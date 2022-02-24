const db = require('../../config/database') 

//mendaftarkan produk
function insertProduct(req, res) {
    let data = [req.body.name, req.body.quantity, req.body.price, req.body.userId]

    let insertQuery = `INSERT INTO product (name, quantity, price, userId) VALUES (?,?,?,?);`
    db.query(insertQuery, data, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

//menampilkan list produk
function listProduct(req, res) {
    let selectQuery = `SELECT * FROM product WHERE userId = ?`
    let data = [req.params.id]

    db.query(selectQuery, data, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}

//mengupdate produk
function updateProduct(req, res) {
    let updateQuery = `UPDATE product SET name = ?, quantity = ?, price = ? WHERE id = ?`
    let data = [req.body.name, req.body.quantity, req.body.price, req.params.id]  
    
    db.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

//menghapus produk
function deleteProduct(req, res) {
    let deleteQuery = `DELETE FROM product WHERE userId = ?`
    let data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertProduct,
    listProduct,
    updateProduct,
    deleteProduct
}