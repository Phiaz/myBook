const {connect, sql } = require('../../config/database');
//
async function getAllUser(result) {
    try {
        var sqlString = 'select * from users';
        const pool = await connect;
        return await pool.request()
        .query(sqlString, (err, data) => {  
            if(!err) {
                result(null, data.recordsets[0])
            } else {
                result(err)
            }
        })
    } catch (err) {
        result(err)
    }  
}

async function deleteUser(id) {
    try {
        var sqlString = 'delete from users where userId = @userId'
        const pool = await connect;
        return await pool.request()
        .input('userId', sql.Int, id)
        .query(sqlString)
    } catch (err) {
        result(err)
    }  
}

async function setRoleUser(userId, role) {
    try {
        var sqlString = 'update users set role = @role where userId = @userId'
        const pool = await connect;
        return await pool.request()
        .input('userId', sql.Int, userId)
        .input('role', sql.VarChar, role)
        .query(sqlString)
    } catch (err) {
        console.log(err)
    }  
}
module.exports = {
    getAllUser, deleteUser, setRoleUser
}