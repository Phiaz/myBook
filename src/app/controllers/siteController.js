function site(req, res) {
    res.render('site', {layout: 'siteLayout', title: "My Book 🎗️"})
}

module.exports = {
    site
}