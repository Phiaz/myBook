function test(req, res, next) {
    let data = req.cookies.role
    res.render('test', {data: data, layout:"userLayout"})
}
module.exports = {
    test
}