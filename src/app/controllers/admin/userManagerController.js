const Admin = require('../../models/Admin')
function userManager (req, res, next) {
    Admin.getAllUser((err, data)=>{
    res.render('admin/userManager', {layout: 'userLayout', users: data});
    })
    // res.render('admin/userManager', {layout: 'userLayout', users: });
}

async function deleteUser(req, res, next) {
    await Admin.deleteUser(req.params.userId)
    res.redirect('/admin/userManagement');
}

async function setRoleUser(req, res, next) {
    await Admin.setRoleUser(req.params.userId, req.body.action)
    res.redirect('/admin/userManagement');
}

module.exports = {
    userManager, deleteUser, setRoleUser
}