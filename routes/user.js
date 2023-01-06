const router = require('express').Router();
const passport = require('passport');

const {
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    registerUser
} = require('../controllers/userControllers');

//GET METHODS
router.get('/',getIndexPage);
router.get('/login', getLoginPage);
router.get('/register', getRegisterPage);

//POST METHODS
router.post('/register', registerUser);


module.exports = router;
