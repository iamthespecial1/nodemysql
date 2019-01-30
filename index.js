var express = require('express')
var mysql = require('mysql')
var app = express()
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testDB'
})

connection.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Connect')
    }
})

app.get('/:id/:username', function (req, res) {
    connection.query(`SELECT * FROM new_table WHERE id=${req.params.id} AND username='${req.params.username}'`, function (error, rows, fields) {
        if (error) {
            res.send(error)
        }
        else {
            res.send(rows)
        }
    })
})

app.listen(3000)
