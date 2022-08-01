const express = require('express')
const router = express.Router()

const homeController = require('../app/controllers/me/homeController')

const profileController = require('../app/controllers/me/profileController')
router.get('/home', homeController.home)
router.get('/profile/:userName', profileController.profile)
module.exports = router