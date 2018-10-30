const express = require('express');
const mysql = require('mysql');

const router = express.Router();

//DB config
const db = require('../../../config/keys');
const crypt = require('../../../config/encrypt.js');

//MySQL functions
const connection = mysql.createConnection(db);

const authenticateUser = function(username, password) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT users.id FROM users WHERE username = '${username}' and password = '${crypt(password)}'`, (err, result) => {
            if (err) reject(err);
            else if (result.length == 0) resolve(0);
            else resolve(result[0].id);
        });
    });
};

//Middleware

//POST
//Authenticate username and password
//Public
router.post('/', async (req, res) => {
    let info = await authenticateUser(req.body.username, req.body.password).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
    if (info == 0) {
        res.sendStatus(401);
    } else {
        req.session.userID = info;
        res.send(req.session);
    }
});

module.exports = router;