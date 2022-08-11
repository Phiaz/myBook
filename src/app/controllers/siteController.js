const axios = require('axios');
async function site(req, res) {
    const getTheCat = await axios.get('https://api.thecatapi.com/v1/images/search')
    const catUrl = getTheCat.data[0]
    console.log(catUrl)
    const width = catUrl.width/2
    const height = catUrl.height/2
    const url = catUrl.url
    res.render('site', {layout: 'siteLayout', title: "My Book 🎗️", cat: catUrl, catWidth: width, catHeight: height})
}

module.exports = {
    site
}