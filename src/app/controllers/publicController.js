const User = require('../models/User')
const Public = require('../models/Public')
const catchError = require('./catchError')

async function publicProfile(req, res, next) {

    const accessToken = req.cookies.accessToken
    let layoutSetting = ''
    if (accessToken) {
       layoutSetting = 'userLayout'
       if(req.cookies.userId == req.params.userId) {
        res.redirect(`/me/profile/${req.cookies.userId}`)
       }
       else {
        res.locals.userName = req.cookies.userName
        res.locals.nickName = req.cookies.nickName
        res.locals.roleView = function () {
            if (req.cookies.role == 'admin') {
            return `<hr class="dropdown-divider">
                <a class="dropdown-item" href="/admin/userManagement">Quản lý người dùng</a>`
            }
        }
       }
    }
    if (!accessToken) {
        layoutSetting = 'siteLayout'
    }
    const followList = await User.followCount(req.params.userId)
    await Public.findProfile(req.params.userId, req.cookies.userId, (err, data) => {
        if (!err) {
            data[1].forEach((tweet) => {
                tweet.userName = req.params.userName
            })
            res.render('userProfile', {layout: layoutSetting,
                user: data[0][0], reviews: data[1].reverse(), isFollow:data[2], following: followList[1], follower: followList[0]})
        } else {
            catchError(res , err)
        }
    })
}

async function publicPost(req, res, next) {
    const accessToken = req.cookies.accessToken
    let layoutSetting = ''
    if (accessToken) {
       layoutSetting = 'userLayout'
    }
    if (!accessToken) {
        layoutSetting = 'siteLayout'
    } 
    await Public.findReview(req.params, (err, data) => {
        if (!err) {
            res.render('userPost', {layout: layoutSetting, user: data[0][0], review: data[1][0]})
        } else {
            catchError(res , err)
        }
    })
}


module.exports = {
    publicProfile,
    publicPost
}