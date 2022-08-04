const { response } = require('express')
const Review = require('../../models/Review')
const User = require('../../models/User')
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
    User.findUser(req.cookies, (err, data) => {
        res.render('me/setting', {layout: 'userLayout', userData: data})
    })
}

function profileUpdate(req, res, next) {
    User.updateUser(req.cookies.userId, req.body, (err, data) => {
        if (!err) {
            // res.json(data)
            res.render('me/profile', {layout: 'userLayout', reviews: data})
        } else {
            catchError(res , err)
        }
    })
}

module.exports = {
    profile, setting, profileUpdate
}