module.exports = function(res, err)  {
        return res.render('err', {err:err, layout: 'errorLayout'})
    }   