const { response } = require('express')
const Review = require('../../models/Review')
const User = require('../../models/User')
const catchError = require('../catchError')


async function profile(req, res, next) {
    const followList = await User.followCount(req.params.userId)
    await Review.allReviews(req.cookies, async (err, data) => {
        if (!err) {
            // res.json(followList)
            res.render(`me/profile`, {layout: 'userLayout', reviews: data, following: followList[1], follower: followList[0]})
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
            res.redirect(`/me/profile/${req.cookies.userName}`)
        } else {
            catchError(res , err)
        }
    })
}

function follow(req, res, next) {
    User.follow(req.params.userId, req.cookies.userId, (err, data) => {
        res.redirect(`/public/${req.params.userId}`)
    })
}

function unFollow(req, res, next) {
    User.unFollow(req.params.userId, req.cookies.userId, (err, data) => {
        res.redirect(`/public/${req.params.userId}`)
    })
}
module.exports = {
    profile, setting, profileUpdate,
    follow, unFollow
}