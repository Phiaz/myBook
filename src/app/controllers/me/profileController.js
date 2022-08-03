const Review = require('../../models/Review')
const catchError = require('../catchError')


function profile(req, res, next) {
    Review.allReviews(req.cookies, (err, data) => {
        if (!err) {
            // res.json(data)
            res.render('me/profile', {layout: 'userLayout', reviews: data})
        } else {
            catchError(res , err)
        }
    })
}

module.exports = {
    profile
}