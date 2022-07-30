const authRouter = require('./auth')
const meRouter = require('./me')
const siteRouter = require('./site')
function route(app) {
    app.use('/auth', authRouter)
    app.use('/', siteRouter)
    // app.use('/me/', meRouter)
}
module.exports = route