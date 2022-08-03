const Review = require('../../models/Review')
const catchError = require('../catchError')
// const firebase = require('../../../config/firebase')
// [GET] /me/reviews/upload
function upload(req, res, next) {
    res.render('me/uploadReview', {layout: 'userLayout'})
}

function allReviews(req, res, next) {
    res.render('me/storedReviews', {layout: 'userLayout'})
}

function uploadReview(req, res, next) {
    Review.newReview(req.cookies, req.body, (err, bookName) => {
        if (!err) {
            res.redirect(`/me/profile/${req.cookies.userName}`)
        } else {
            catchError(res , err)
        }
    })
}

function detail(req, res, next) {
    Review.findReview(req.params.tweetId, (err, data) => {
        if (!err) {
            res.render('me/showReview', {tweet: data, layout: 'userLayout'})
        } else {
            catchError(res , err)
        }
    })
}
module.exports = {
    upload, allReviews, uploadReview, detail
}