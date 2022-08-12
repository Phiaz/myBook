const User = require('../models/User')
const errorCatcher = require('../controllers/catchError')
const jwt = require('jsonwebtoken')
const md5 = require('md5')
const { Jwt_Secret } = require('../../config/key')
const catchError = require('../controllers/catchError')

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
        })
        next() 
    } catch (error) {
        errorCatcher(res, error)
    }
}

function verifyToken (req, res, next) {
    const accessToken = req.cookies.accessToken
    if (accessToken) {
        jwt.verify(accessToken, Jwt_Secret, (err, data) => {
        if(err) {
            return catchError(res,"Phiên đăng nhập hết hạn, bạn cần phải đăng nhập lại")
        }
        res.cookie('userName', data.userName)
        res.cookie('email', data.email)
        res.cookie('role', data.role)
        res.cookie('userId', data.userId)
        res.cookie('nickName', data.nickName)
        res.locals.userId = data.userId
        res.locals.nickName = data.nickName
        res.locals.userName = data.userName
        res.locals.img = data.img
        res.locals.roleView = function () {
            if (data.role == 'admin') {
            return `<hr class="dropdown-divider">
                <a class="dropdown-item" href="/admin/userManagement">Quản lý người dùng</a>`
            }
        }
        next()
        })
    } else {
        return catchError(res,"Bạn cần phải đăng nhập để thực hiện chức năng này")
    }
}

function adminChecked (req, res, next) {
    const accessToken = req.cookies.accessToken
    if (accessToken) {
    jwt.verify(accessToken, Jwt_Secret, (err, data) => {
        if(data.role !== 'admin') {
            return catchError(res,"Bạn không có quyền truy cập trang này")
        }
        next()
    })
    } else {
        return catchError(res,"Bạn không có quyền truy cập trang này")
    }
}




module.exports = {
    checkExisted, verifyToken, adminChecked
}