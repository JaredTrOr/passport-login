const isAuth = (req,res,next) => {
    if(req.isAuthenticated()) return next();
    res.redirect('/login');
}

const isNotAuth = (req,res,next) => {
    if(req.isAuthenticated()) return res.redirect('/protected');
    next();
}

module.exports = {isAuth, isNotAuth};