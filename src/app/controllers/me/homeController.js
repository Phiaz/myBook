const Review = require('../../models/Review')
const catchError = require('../catchError')


function home(req, res, next) {
    res.render('me/home', {layout: 'userLayout'})
}

module.exports = {
    home
}