const express = require('express');
const mysql = require('mysql');

const router = express.Router();

//DB config
const db = require('../../../config/keys');
const crypt = require('../../../config/encrypt.js');

//MySQL functions
const connection = mysql.createConnection(db);

//Add an account
const addUser = function(username, password, email) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users (username, password, email) VALUES ('${username}', '${crypt(password)}', '${email}')`, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

//Middleware

//POST
//Create account
//Public
router.post('/', async (req, res) => {
    let info = await addUser(req.body.username, req.body.password, req.body.email).catch(() => null);
    res.sendStatus(201);
});

module.exports = router;