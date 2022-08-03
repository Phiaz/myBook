const {connect, sql } = require('../../config/database');

//

async function newReview(user, data, result) {
        try {
            const userId = user.userId
            var sqlString = 'INSERT INTO tweet(bookName, author, content, userId) values (@bookName, @author, @content, @userId)'
            const pool = await connect;
            return await pool.request()
            .input('bookName',sql.VarChar, data.bookName)
            .input('author',sql.VarChar, data.author)
            .input('content',sql.VarChar, data.content)
            .input('userId',sql.Int, userId)
            .query(sqlString, (err, review) => {
                if (!err) { 
                    result(null, data.bookName)
                } else {
                    result(err)
                }
            })
        } catch (error) {
            result(error)
        }
    }

async function allReviews(user, result) {
    try {
        const userId = user.userId
        var sqlString = 'select * from tweet where userId = @id'
        const pool = await connect;
        return await pool.request()
        .input('id',sql.Int, userId)
        .query(sqlString, (err, data) => {
            if (!err) { 
                result(null, data.recordset.reverse())
            } else {
                result(err)
            }
        })
    } catch (error) {
        result(error)
    }
}

module.exports = {
    newReview, allReviews
}