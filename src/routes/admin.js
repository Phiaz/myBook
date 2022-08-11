const express = require('express')
const router = express.Router()
const userManagerController = require('../app/controllers/admin/userManagerController')


router.get('/userManagement', userManagerController.userManager)
router.delete('/user/:userId', userManagerController.deleteUser)
router.patch('/user/:userId', userManagerController.setRoleUser)

module.exports = router