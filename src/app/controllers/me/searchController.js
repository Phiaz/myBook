const Review = require('../../models/Review')
const User = require('../../models/User')


function search(req, res, next) {
    switch(req.body.action) {
        case 'tweet':
            Review.searchReviewByName(req.body.search, (err,data) => {
                if (!err) {
                    // res.json(data)
                    res.render('me/searchPost', {layout: 'userLayout', tweets: data})
                } else {
                    catchError(res, err)
                }                
            })
            break;
        case 'userName':
            User.searchByUserName(req.cookies.userId, req.body.search, (err, data) => {
                if (!err) {
                    // res.json(data)
                    res.render('me/searchUser', {layout: 'userLayout', users: data})
                } else {
                    catchError(res, err)
                }
            })
            break;
        case 'nickName':
            User.searchByNickName(req.cookies.userId, req.body.search, (err, data) => {
                if (!err) {
                    res.render('me/searchUser', {layout: 'userLayout', users: data})
                } else {
                    catchError(res, err)
                }
            })
    }
}

function searchDirect(req, res, next) {
    res.redirect('/me/home')
}
module.exports = {
    search, searchDirect
}