const axios = require('axios');
module.exports = async function(res, err)  {
    const getTheCat = await axios.get('https://api.thecatapi.com/v1/images/search')
    const catUrl = getTheCat.data[0]
    const width = catUrl.width/2
    const height = catUrl.height/2
    const url = catUrl.url
    return res.render('err', {err:err, layout: 'errorLayout', cat: url, catWidth: width, catHeight: height })
}   