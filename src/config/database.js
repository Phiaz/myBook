const sql = require('mssql');
const sqlConfig = {
    "user": 'caophi', 
    "password": '123456',
    "server": 'DESKTOP-N5UI0BA\\SQLEXPRESS',
    "database": 'bookApp', 
    "port": 1433,
    "dialect": "mssql",
    "options": {
        trustServerCertificate: true
    }
};


const connect = new sql.ConnectionPool(sqlConfig)
    .connect()
    .then(pool => {
        console.log('Db connect successfully')
        return pool
    });

module.exports = {
    connect,
    sql
}