const express = require('express')
const router = express.Router()

const authController = require('../app/controllers/authController')

router.get('/login', authController.login)
router.get('/signUp', authController.signUp)
// router.post('/login', authController.checkLogin)
// router.post('/signUp', authController.checkSignup)
module.exports = router