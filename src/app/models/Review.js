const {connect, sql } = require('../../config/database');

//

async function newReview(user, data, imgLink, result) {
        try {
            const userId = user.userId
            var sqlString = `INSERT INTO tweet(bookName, author, content, img, userId, userName, nickName)
             values (N'${data.bookName}', N'${data.author}', N'${data.content}',
            @imgLink,
            N'${userId}', N'${user.userName}', N'${user.nickName}')`
            const pool = await connect;
            return await pool.request()
            .input('imgLink', sql.NVarChar, imgLink)
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

async function searchReviewByName(data, result) {
    try {
        const sqlString  = `select * from tweet where bookName like N'%${data}%'`
        const pool = await connect;
        return await pool.request()
        .query(sqlString, (err, data) => {
            if (!err) { 
                result(null, data.recordset)
            } else {
                result(err)
            }
        })
    } catch(err) {
        result(err)
    }
}


async function findAllReviews(user) {
    try {
        // const userId = userId
        var sqlString = 'select * from tweet where userId = @id'
        const pool = await connect;
        const data = await pool.request()
        .input('id',sql.Int, user)
        .query(sqlString)
        return data.recordsets[0]
    } catch (error) {
        console.log(error)
    }
}

async function newFeed(userId) {
    try {
        var sqlString = `(select * from tweet where userId = @userId
            union
            select * from tweet where userId in (
            select userId from followList where followerId = @userId))
            order by createdDate DESC`
            const pool = await connect;
            const data = await pool.request()
            .input('userId',sql.Int, userId)
            .query(sqlString)
            return data.recordset
    } catch (error) {
        console.log(error)
    }
}

async function updateReview(id, data) {
    try {
        var sqlString = `update tweet set bookName = N'${data.bookName}', content = N'${data.content}', author = N'${data.author}' where tweetId = @id`
            const pool = await connect;
            await pool.request()
            .input('id',sql.Int, id)
            .query(sqlString)
    } catch (error) {
        console.log(error)
    }
}

async function deleteReview(id) {
    try {
        var sqlString = `delete from tweet where tweetId= @id`
            const pool = await connect;
            await pool.request()
            .input('id',sql.Int, id)
            .query(sqlString)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    newReview, allReviews, findReview, searchReviewByName,
    findAllReviews, newFeed, updateReview, deleteReview
}