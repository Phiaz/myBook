function login(req, res) {
    res.render('auth/login', {layout: 'authLayout', title: 'Đăng nhập'})
}

function signUp(req, res) {
    res.render('auth/signUp', {layout: 'authLayout', title: 'Đăng ký'})
}

// function login(req, res) {
//     res.render('auth.login', {layout: 'authLayout', title: 'Đăng nhập'})
// }

// function login(req, res) {
//     res.render('auth.login', {layout: 'authLayout', title: 'Đăng nhập'})
// }
module.exports = {
    signUp, login
}