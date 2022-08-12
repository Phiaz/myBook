const Review = require('../../models/Review')
const catchError = require('../catchError')
const cloudinary = require('../../../config/cloudinary')
// [GET] /me/reviews/upload
function upload(req, res, next) {
    res.render('me/uploadReview', {layout: 'userLayout'})
}

async function allReviews(req, res, next) {
    const reviews = await Review.findAllReviews(req.cookies.userId)
    // res.json(reviews[1])
    res.render('me/storedReviews', {layout: 'userLayout', reviews: reviews})
}

async function uploadReview(req, res, next) {
    cloudinary.uploadSingle(req.file.path)
    .then((result) => {
        // res.json(req.file)
        Review.newReview(req.cookies, req.body, result.url, (err) => {
            if (!err) {
                // res.json(result)
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
            // res.json({data:data})
            res.render('me/showReview', {tweet: data, layout: 'userLayout', user: req.cookies})
        } else {
            catchError(res , err)
        }
    })
}

function edit(req, res, next) {
    Review.findReview(req.params.tweetId, (err, data) => {
        if (!err) {
            res.render('me/editReview', {tweet: data, layout: 'userLayout'})
        } else {
            catchError(res , err)
        }
    })
}

async function updateReview(req, res, next) {
    await Review.updateReview(req.params.tweetId, req.body)
    res.redirect(`/me/profile/${req.cookies.userId}`)
}

async function deleteReview(req, res) {
    await Review.deleteReview(req.params.tweetId)
    res.redirect('back')
}
module.exports = {
    upload, allReviews, uploadReview, detail, edit, updateReview, deleteReview
}