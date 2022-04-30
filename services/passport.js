"use strict"

// import dependencies used to authenticate
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

// Models that have to be authenticated
const User = require("../api/http/models/user")


// Configuration
passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        session: false
    }, async (email, password, done) => {

        try {
            let user = await User.findOne({ email })

            if(!user) done(null, false, { message: "Incorrect email" })

            if(!user.validPassword(password)) done(null, false, { message: "Incorrect password" })

            return done(null, user)

        } catch (error) {
            console.log(error)
            return done(error)
        }

    }
));


passport.serializeUser(function(user, done) {
    done(null, user._id);
});


passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});


module.exports = { passport }


