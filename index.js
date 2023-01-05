require('dotenv').config();
require('./connection'); //Database connection

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/routes');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use('/', router);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});