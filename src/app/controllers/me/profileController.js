const { response } = require('express')
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

function setting(req, res, next) {
    res.render('me/setting', {layout: 'userLayout'})
}

module.exports = {
    profile, setting
}