const {connect, sql } = require('../../config/database');

//

async function newReview(user, data, result) {
        try {
            const userId = user.userId
            var sqlString = `INSERT INTO tweet(bookName, author, content, userId) values (N'${data.bookName}', N'${data.author}', N'${data.content}', N'${userId}')`
            const pool = await connect;
            return await pool.request()
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

async function findReview(id, result) {
    try {
        // const userId = user.userId
        var sqlString = 'select * from tweet where tweetId = @id'
        const pool = await connect;
        return await pool.request()
        .input('id',sql.Int, id)
        .query(sqlString, (err, data) => {
            if (!err) { 
                result(null, data.recordset[0])
            } else {
                result(err)
            }
        })
    } catch (error) {
        result(error)
    }
}
module.exports = {
    newReview, allReviews, findReview
}