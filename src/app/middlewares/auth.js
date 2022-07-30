const {connect, sql} = require('../../config/database')
const User = require('../models/User')
const errorCatcher = require('../controllers/catchError')
const { response } = require('express')

async function checkExisted(req, res, next) {
    try {
        await User.findUser(req.body, (err, data) => {
            if (err) {  
                return errorCatcher(res, err)
            }
            if (data) {
                if(data.userName === req.body.userName) {
                    return res.render('auth/signUp', {userNameErr: 'Tên tài khoản đã tồn tại', layout: 'authLayout'})
                }   
                if(data.email === req.body.email) {
                    return res.render('auth/signUp', {emailErr: 'Email đã được sử dụng', layout: 'authLayout'})
                }
            }
            next()
        })  
    } catch (error) {
        errorCatcher(res, error)
    }
}

module.exports = {
    checkExisted
}