const router = require('express').Router();
const passport = require('passport');

//Controllers
const {
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProtectedPage,
    registerUser,
    loggingOut
} = require('../controllers/userControllers');

//Middlewares
const {isAuth, isNotAuth }= require('../middlewares/auth');

//GET METHODS
router.get('/',isNotAuth,getIndexPage);
router.get('/login',isNotAuth, getLoginPage);
router.get('/register',isNotAuth, getRegisterPage);
router.get('/protected',isAuth, getProtectedPage)

//POST METHODS
router.post('/register', registerUser);

//Login passport authentication
router.post('/login', passport.authenticate('local', {
    successRedirect: '/protected',
    failureRedirect: '/login',
    failureFlash: true
}));

//DELETE METHODS
router.delete('/logout', loggingOut);

module.exports = router;
