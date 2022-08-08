const Review = require('../../models/Review')
const catchError = require('../catchError')
const cloudinary = require('../../../config/cloudinary')
// const firebase = require('../../../config/firebase')
// [GET] /me/reviews/upload
function upload(req, res, next) {
    res.render('me/uploadReview', {layout: 'userLayout'})
}

function allReviews(req, res, next) {
    res.render('me/storedReviews', {layout: 'userLayout'})
}

async function uploadReview(req, res, next) {
    cloudinary.uploadSingle(req.file.path)
    .then((result) => {
        Review.newReview(req.cookies, req.body, result.url, (err) => {
            if (!err) {
                res.redirect(`/me/profile/${req.cookies.userId}`)
            } else {
                catchError(res , err)
            }
        })
    })
}

function detail(req, res, next) {
    Review.findReview(req.params.tweetId, (err, data) => {
        if (!err) {
            res.render('me/showReview', {tweet: data, layout: 'userLayout', user: req.cookies})
        } else {
            catchError(res , err)
        }
    })
}
module.exports = {
    upload, allReviews, uploadReview, detail
}