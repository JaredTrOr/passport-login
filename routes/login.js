const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('login.ejs');
});

router.post('/', (req,res) => {
    const {email, password} = req.body;
    
});

module.exports = router;