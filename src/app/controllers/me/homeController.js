const jwt = require('jsonwebtoken')



function home(req, res, next) {
    res.render('me/home', {layout: 'userLayout'})
}

module.exports = {
    home
}