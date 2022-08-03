const {connect, sql } = require('../../config/database');
const md5 = require('md5');


//
async function findUser(userInfo, result) {
    try {
    var sqlString = 'select * from users where userName = @userName or email = @email';
    const pool = await connect;
    return await pool.request()
    .input('userName', sql.VarChar, userInfo.userName)
    .input('email', sql.VarChar, userInfo.email)
    .query(sqlString, (err, data) => {  
        if(!err) {
            result(null, data.recordset[0])
        } else {
            result(err)
        }
    })
    } catch (err) {
        result(err)
    }
    
}
async function newUser(data, result) {
        try {
            const hashedPassword = md5(data.password)
            var sqlString = 'INSERT INTO Users(userName, email, password) values (@userName, @email, @password)'
            const pool = await connect;
            return await pool.request()
            .input('userName',sql.VarChar, data.userName)
            .input('email',sql.VarChar, data.email)
            .input('password',sql.VarChar, hashedPassword)
            .query(sqlString, (err, data) => {
                if (!err) { 
                    result(null, data)
                } else {
                    result(err)
                }
            })
        } catch (error) {
            result(error)
        }
    }

module.exports = {
    findUser, newUser
}