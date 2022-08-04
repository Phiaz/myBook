const express = require('express')
const router = express.Router()
const publicController = require('../app/controllers/publicController')


router.get('/:tweetId', publicController.publicPost)
router.get('/', publicController.publicProfile)


module.exports = router