const {connect, sql } = require('../../config/database');

async function findProfile (user, result) {
    try {
        const sqlString = `select userName, userId, nickName, fullName from users where userName = @userName

        select * from tweet where userid in(select userId from users where userName = @userName)`
        const pool = await connect;
        return await pool.request()
        .input('userName', sql.NVarChar, user)
        .query(sqlString, (err, data) => {
            if (!err) { 
                result(null, data.recordsets)
            } else {
                result(err)
            }
        })
    } catch(err) {
        result(err)
    }
}

async function findReview (data, result) {
    try {
        const sqlString = `
        select userName, userId, nickName, fullName from users where userId = @userId
        select * from tweet where tweetId = @tweetId`
        const pool = await connect;
        return await pool.request()
        .input('userId', sql.NVarChar, data.userId)
        .input('tweetID', sql.Int, data.tweetId )
        .query(sqlString, (err, data) => {
            if (!err) { 
                result(null, data.recordsets)
            } else {
                result(err)
            }
        })
    } catch(err) {
        result(err)
    }
}
module.exports = {
    findProfile, findReview
}