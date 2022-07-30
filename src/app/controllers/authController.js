const User = require('../models/User')
const catchError = require('./catchError')

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
// function login(req, res) {
//     res.render('auth.login', {layout: 'authLayout', title: 'Đăng nhập'})
// }

// function login(req, res) {
//     res.render('auth.login', {layout: 'authLayout', title: 'Đăng nhập'})
// }
module.exports = {
    signUp, login, checkSignUp
}