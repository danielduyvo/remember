const express = require('express');
const mysql = require('mysql');

const router = express.Router();

//DB config
const db = require('../../../config/keys');
const crypt = require('../../../config/encrypt.js');

//MySQL functions
const connection = mysql.createConnection(db);

//View all cards under user
const viewAllCards = function(userID) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT cards.* FROM cards WHERE userID = '${userID}'`, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

//Creating a new card
const createCard = function(userID, question, answer) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO cards (userID, question, answer) VALUES ('${userID}', '${question}', '${answer}')`, (err, result) => {
            if (err) reject (err);
            else resolve(result);
        });
    });
}

//Deleting a card
const deleteCard = function(cardID) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM cards WHERE id = '${cardID}'`, (err, result) => {
            if (err) reject (err);
            else resolve(result);
        });
    });
}

//Updating a card
const updateCard = function(cardID, question, answer, level) {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE cards SET question = '${question}', answer = '${answer}', level = ${level} WHERE id = '${cardID}'`, (err, result) => {
            if (err) reject (err);
            else resolve(result);
        });
    });
}

//Middleware
//GET
//View all cards under a user
//Logged in
router.get('/', async (req, res, next) => {
    if (req.session.userID) {
        let info = await viewAllCards(req.session.userID);
        res.send(info);
    } else {
        res.sendStatus(401);
    }
});

//POST
//Create card
//Logged in
router.post('/', async (req, res, next) => {
    if (req.session.userID) {
        await createCard(req.session.userID, req.body.question, req.body.answer);
        res.sendStatus(201);
    } else {
        res.sendStatus(401);
    }
});

//DELETE
//Delete card
//Logged in
router.delete('/:cardID', async (req, res, next) => {
    if (req.session.userID) {
        await deleteCard(req.params.cardID);
        res.sendStatus(204);
    } else {
        res.sendStatus(401);
    }
});

//PUT
//Edit card
//Logged in
router.put('/:cardID', async (req, res, next) => {
    if (req.session.userID) {
        await updateCard(req.params.cardID, req.body.question, req.body.answer, req.body.level);
        res.sendStatus(204);
    } else {
        res.sendStatus(401);
    }
});

module.exports = router;