const Review = require('../../models/Review')
const catchError = require('../catchError')


async function home(req, res, next) {
    const newFeed = await Review.newFeed(req.cookies.userId)
    res.render('me/home', {layout: 'userLayout', reviews: newFeed})
}

module.exports = {
    home
}