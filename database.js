var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "mysql-prim.mysql.database.azure.com",
    user: "mysqluser@mysql-prim",
    password: "user123!",
    database: 'test'
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = conn;
