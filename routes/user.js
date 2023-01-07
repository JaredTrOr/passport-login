const router = require('express').Router();
const passport = require('passport');

const {
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProtectedPage,
    registerUser
} = require('../controllers/userControllers');

//GET METHODS
router.get('/',getIndexPage);
router.get('/login', getLoginPage);
router.get('/register', getRegisterPage);
router.get('/protected', getProtectedPage)

//POST METHODS
router.post('/register', registerUser);

//Login passport authentication
router.post('/login', passport.authenticate('local', {
    successRedirect: '/protected',
    failureRedirect: '/login',
    failureFlash: true
}));

module.exports = router;
