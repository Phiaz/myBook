function profile(req, res ,next) {
    res.render('me/profile', {layout: 'userLayout'})
}
module.exports = {
    profile}