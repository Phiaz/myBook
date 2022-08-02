const express = require('express')
const router = express.Router()

const homeController = require('../app/controllers/me/homeController')
const profileController = require('../app/controllers/me/profileController')
const reviewController = require('../app/controllers/me/reviewController')
const msgController = require('../app/controllers/me/msgController')
const newsController = require('../app/controllers/newsController')


router.get('/home', homeController.home)
router.get('/news', newsController.news)
router.get('/msg', msgController.msg)
router.get('/profile/:userName', profileController.profile)
router.get('/review/upload', reviewController.upload)
router.get('/review/library', reviewController.allReviews)
module.exports = router