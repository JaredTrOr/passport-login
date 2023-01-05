const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('login.ejs');
});

router.post('/', (req,res) => {
    res.send('POST operation');
});

module.exports = router;