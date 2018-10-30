const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

//DB config
const db = require('./config/keys');

//Connect to MySQL
const connection = mysql.createConnection(db);
connection.connect((err) => {
    if (err) throw err;
    console.log('You are connected...');
})

//Express session middleware
app.use(session({
    secret: 'remember',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000 //stays logged in for 1 hour
    }
}));

//Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Imported Routes
const create = require('./routes/api/user/create');
app.use('/create', create);

const login = require('./routes/api/user/login');
app.use('/login', login);

const logout = require('./routes/api/user/logout');
app.use('/logout', logout);

const cards = require('./routes/api/flashcards/cards');
app.use('/cards', cards);

const test = require('./routes/api/flashcards/test');
app.use('/test', test);

//Routes
app.get('/', function (req, res) {
    console.log(req.session);
    res.sendStatus(200);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));