const authRouter = require('./auth')
const meRouter = require('./me')
const siteRouter = require('./site')
const testRouter = require('./test')
const adminRouter = require('./admin')
const publicRouter = require('./public')
// const passport = require('passport');
// const passportConfig = require('../app/middlewares/passport')
const auth = require('../app/middlewares/auth')

function route(app) {
    app.use('/auth', authRouter)
    app.use('/admin',auth.verifyToken, auth.adminChecked, adminRouter)
    app.use('/me',auth.verifyToken, meRouter)
    app.use('/public', publicRouter)
    app.use('/', siteRouter)
}
module.exports = route