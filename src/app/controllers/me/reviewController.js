// [GET] /me/reviews/upload
function upload(req, res, next) {
    res.render('me/uploadReview', {layout: 'userLayout'})
}

function allReviews(req, res, next) {
    res.render('me/storedReviews', {layout: 'userLayout'})
}
module.exports = {
    upload, allReviews
}