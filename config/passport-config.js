const LocalStrategy = require('passport').Strategy
const {User} = require('../connection');
const bcrypt = require('bcrypt');

function initialize (passport){
    
    const authenticateUser = async (email, password, done) => {
        try{
            const user = await User.findOne({where: {email}}); //Get user from DB
            if(!user === null){
                try{
                    if(await bcrypt.compare(password, user.password)){
                        return done(null, user);
                    }
                    else{
                        return done(null,false, {msg:'Incorrect password'});
                    }
                }catch(err){
                    return done(err);
                }                
            }

            return done(null,false, {msg:'No user with that email'});

        }catch(err){
            return done(err);
        }
    }

    passport.use(new LocalStrategy({usernameField: 'email'}), 
    authenticateUser);

    passport.serializeUser((user, done) => {

    });

    passport.deserializeUser((id, done) => {

    });
}

module.exports = initialize;