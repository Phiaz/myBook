const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const {ExtractJwt} = require('passport-jwt')
const catchError = require('../controllers/catchError')

const {Jwt_Secret} = require('../../config/key')
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
    secretOrKey: Jwt_Secret
}, (payload, done) => {
    try {
        console.log(payload)
    } catch(err) {
        done(error, false)
    }
    }
))