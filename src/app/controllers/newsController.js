function news(req, res ,next) {
    res.render('news', {layout: 'userLayout'})
}
module.exports = {
    news}