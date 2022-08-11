const Review = require('../../models/Review')
const catchError = require('../catchError')


async function home(req, res, next) {
    const newFeedData = await Review.newFeed(req.cookies.userId)
    const pageNumber = newFeedData.length % 6 == 0 ? newFeedData.length/6 : newFeedData.length/6 + 1
    const pageItem = 6
    const pageCount = []
    var page = req.query.page || 1
    for (let i = 1; i <= pageNumber; ++i) {
        pageCount.push(i)
    }
    console.log(newFeedData.length)
    const newFeed = newFeedData.slice((page - 1)*pageItem, (page - 1)*pageItem+  pageItem)
    res.render('me/home', {layout: 'userLayout', reviews: newFeed, pagination : pageCount})
}

module.exports = {
    home
}