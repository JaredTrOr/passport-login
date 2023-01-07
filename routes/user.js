const router = require('express').Router();
const passport = require('passport');

//Controllers
const {
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProtectedPage,
    registerUser
} = require('../controllers/userControllers');

//Middlewares
const isAuth = require('../middlewares/auth');

//GET METHODS
router.get('/',getIndexPage);
router.get('/login', getLoginPage);
router.get('/register', getRegisterPage);
router.get('/protected', isAuth, getProtectedPage)

//POST METHODS
router.post('/register', registerUser);

//Login passport authentication
router.post('/login', passport.authenticate('local', {
    successRedirect: '/protected',
    failureRedirect: '/login',
    failureFlash: true
}));

module.exports = router;
