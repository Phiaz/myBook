const express = require('express')
const router = express.Router()

const homeController = require('../app/controllers/me/homeController')
const profileController = require('../app/controllers/me/profileController')
const reviewController = require('../app/controllers/me/reviewController')
const msgController = require('../app/controllers/me/msgController')
const newsController = require('../app/controllers/newsController')
const searchController = require('../app/controllers/me/searchController')
// GET me
router.get('/home', homeController.home)
router.get('/news', newsController.news)
router.get('/msg', msgController.msg)
router.get('/profile', profileController.profile)
router.get('/setting', profileController.setting)

//GET review
router.get('/review/upload', reviewController.upload)
router.get('/review/library', reviewController.allReviews)
router.get('/review/:tweetId', reviewController.detail)


// POST Review
router.post('/review/upload', reviewController.uploadReview)
router.post('/search', searchController.search)
router.get('/search', searchController.searchDirect)
router.post('/follow', profileController.follow )
router.delete('/follow', profileController.unFollow)

//Put me
router.patch('/setting/:userId', profileController.profileUpdate)
module.exports = router