function publicProfile(req, res, next) {
    res.send('hi')
}

function publicPost(req, res, next) {
    res.send('hi')
}

module.exports = {
    publicProfile,
    publicPost
}