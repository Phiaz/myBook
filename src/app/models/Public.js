const {connect, sql } = require('../../config/database');

async function findProfile (userId, followerId, result) {
    try {
        const sqlString = `select userName, userId, nickName, fullName, img from users where userId = @userId

        select * from tweet where userId = @userId
        
        select * from followList where userId = @userId and followerId = @followerId
        `
        const pool = await connect;
        return await pool.request()
        .input('userId', sql.NVarChar, userId)
        .input('followerId', sql.NVarChar, followerId)
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
        await pool.request()
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