const {User} = require('../connection');
const bcrypt = require('bcrypt');

//GET METHODS
const getIndexPage = (req,res) => {
    res.render('index.ejs');
};
const getLoginPage = (req,res) => {
    res.render('login.ejs');
}
const getRegisterPage = (req,res) => {
    res.render('register.ejs');
}
const getProtectedPage = (req,res) => {
    res.render('protected.ejs', {name: req.user.name});
}

//POST METHODS
const registerUser = async (req,res) => {
    const {name, email, password} = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password: hashedPassword
        });
        res.redirect('/login');
    }catch(err){
        res.redirect('/register');
    }
};

//DELETE METHODS
const loggingOut = (req,res, next) => {
    req.logOut((err) => {
        if(err) return next(err);
        res.redirect('/login');
    });
}

module.exports = {
    getIndexPage,
    getLoginPage,
    getRegisterPage,
    getProtectedPage,
    registerUser,
    loggingOut
}