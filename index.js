require('dotenv').config();
require('./connection'); //Database connection

const express = require('express');
const app = express();
const port = process.env.PORT;
const userRouter = require('./routes/user');
const passport = require('passport'); //Passport package
const initializePassport = require('./config/passport-config'); //Initialize function
const flash = require('express-flash')
const session = require('express-session');

initializePassport(passport); //Passport initialization

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use('/', userRouter);
app.use(flash()); //Flash required
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});