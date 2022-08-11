const express = require('express')
const router = express.Router()
const auth = require('../app/middlewares/auth')
const authController = require('../app/controllers/authController')
const validate = require('../app/middlewares/validate')

router.get('/login', authController.login)
router.get('/signUp', authController.signUp)
router.post('/login', authController.checkLogin)
router.post('/signUp',
async(req, res, next) => {
    const result = await validate.signupSchema.validateAsync(req.body)
    console.log(result)
    next()
},
auth.checkExisted, authController.checkSignUp)
router.get('/logout', auth.verifyToken, authController.logOut)
module.exports = router