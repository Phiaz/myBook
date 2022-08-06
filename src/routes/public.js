const express = require('express')
const router = express.Router()
const publicController = require('../app/controllers/publicController')

router.get('/:userId/:tweetId', publicController.publicPost)
router.get('/:userId', publicController.publicProfile)





module.exports = router