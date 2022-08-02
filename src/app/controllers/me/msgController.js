function msg(req, res ,next) {
    res.render('me/msg', {layout: 'userLayout'})
}
module.exports = {
    msg}