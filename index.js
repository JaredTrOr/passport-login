require('dotenv').config();
require('./connection'); //Database connection

const express = require('express');
const app = express();
const port = process.env.PORT;
const userRouter = require('./routes/user');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use('/', userRouter);


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});