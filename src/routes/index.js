const authRouter = require('./auth')
const meRouter = require('./me')
const siteRouter = require('./site')
const passport = require('passport');
const passportConfig = require('../app/middlewares/passport')

function route(app) {
    app.use('/auth', authRouter)
    app.use('/', siteRouter)
    app.use('/me/', passport.authenticate('jwt', {sessions: true}), meRouter)
}
module.exports = route