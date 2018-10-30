const express = require('express');
const mysql = require('mysql');

const router = express.Router();

//DB config
const db = require('../../../config/keys');
const crypt = require('../../../config/encrypt.js');

//MySQL functions
const connection = mysql.createConnection(db);

//Updating a card's level
const updateCardLevel = function(cardID, level) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE cards SET level = ${level} WHERE id = '${cardID}'`, (err, result) => {
            if (err) reject (err);
            else resolve(result);
        });
    });
}

//View specific card's level
const viewLevel = function(cardID) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT cards.level FROM cards WHERE id = '${cardID}'`, (err, result) => {
            if (err) reject(err);
            else resolve(result[0]);
        })
    })
}

//Updating a card's time
const updateCardTime = function(cardID, level) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE cards SET time = FROM_UNIXTIME((POW(2,'${level}') * 86400) + UNIX_TIMESTAMP()) WHERE id = '${cardID}'`, (err, result) => {
            if (err) reject (err);
            else resolve(result);
        });
    });
}

//View all cards under that need to be reviewed
const viewTestCards = function(userID) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT cards.* FROM cards WHERE userID = '${userID}' and time < NOW()`, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

//Middleware
//GET
//View test cards
//Logged in
router.get('/', async (req, res, next) => {
    if (req.session.userID) {
        res.send(await viewTestCards(req.session.userID));
    } else {
        res.sendStatus(401);
    }
})

//PUT
//Change level of card
//Logged in
router.put('/', async (req, res, next) => {
    if (req.session.userID) {
        if (req.body.correct == 0) { //0 if user was wrong, 1 if user was right
            await updateCardLevel(req.body.cardID, 0);
        } else if (req.body.correct == 1) {
            await updateCardLevel(req.body.cardID, "level + 1");
        }
        let newLevel = await viewLevel(req.body.cardID);
        await updateCardTime(req.body.cardID, newLevel.level);
        res.sendStatus(204);
    } else {
        res.sendStatus(401);
    }
});

module.exports = router;