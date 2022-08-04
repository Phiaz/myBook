const { Jwt_Secret } = require('../../config/key')
const User = require('../models/User')
const catchError = require('./catchError')
const jwt = require('jsonwebtoken')
const md5 = require('md5')

function login(req, res) {
    res.render('auth/login', {layout: 'authLayout', title: 'Đăng nhập'})
}

function signUp(req, res) {
    res.render('auth/signUp', {layout: 'authLayout', title: 'Đăng ký'})
}

function checkSignUp(req, res, next) {
    User.newUser(req.body, (err, data) => {
        if (!err) {
            res.render('auth/signUpSuccess', {user: data.userName, layout: 'authLayout'})
        } else{
            catchError(res , err)
        }
    })
}
async function checkLogin(req, res) {
    try {
        await User.findUser(req.body, (err, data) => {
            if(err) {
                return catchError(res, err)
            }
            if (!data) {
                return res.render('auth/login', {layout: 'authLayout', userNameErr: 'Tài khoản không tồn tại'})
            }
            if(data.password !== md5(req.body.password)) {
                return res.render('auth/login', {layout: 'authLayout', passwordErr: 'Sai mật khẩu'})
            }
            const accessToken = jwt.sign({
                userId: data.userId,
                userName: data.userName,
                email: data.email,
                nickName: data.nickName,
                role: data.role
            }, Jwt_Secret, {expiresIn: "1h"})
            res.locals.nickName = data.nickName
            res.cookie('accessToken', accessToken)
            res.redirect('/me/home')
        })
    } catch (error) {
        catchError(res, error)
    }
}

function logOut(req, res) {
    res.clearCookie('accessToken')
    res.clearCookie('role')
    res.clearCookie('userName')
    res.redirect('/')
}

// function login(req, res) {
//     res.render('auth.login', {layout: 'authLayout', title: 'Đăng nhập'})
// }
module.exports = {
    signUp, login, checkSignUp, checkLogin, logOut
}