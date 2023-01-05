require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended: false}));
app.use('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});