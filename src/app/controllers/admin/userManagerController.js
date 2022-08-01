function userManager () {
    res.render('admin/userManager', {layout: 'userLayout'});
}

module.exports = {
    userManager
}