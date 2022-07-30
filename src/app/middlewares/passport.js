const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')

const {JWT_secret} = require('../../config/key')
passport.use(new JwtStrategy({
    jwtFromRequest: ,
    secretOrKey:
}, () => {

}))