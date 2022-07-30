const User = require('../models/User')
const catchError = require('./catchError')

function login(req, res) {
    res.render('auth/login', {layout: 'authLayout', title: 'Đăng nhập'})
}

function signUp(req, res) {
    res.render('auth/signUp', {layout: 'authLayout', title: 'Đăng ký'})
}

function test(req, res, next) {
    User.findUser(req.body, (err, data) => {
        catchError(res, err)})
        // res.render('err', {err:err, layout: 'errorLayout'})
}
// function login(req, res) {
//     res.render('auth.login', {layout: 'authLayout', title: 'Đăng nhập'})
// }

// function login(req, res) {
//     res.render('auth.login', {layout: 'authLayout', title: 'Đăng nhập'})
// }
module.exports = {
    signUp, login, test
}