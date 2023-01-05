const router = require('express').Router();
const loginRouter = require('./login');
const registerRouter = require('./register');

router.get('/', (req,res) => {
    res.render('index');
});

router.use('/login', loginRouter);
router.use('/register', registerRouter);

module.exports = router;
