var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "mysqldatabase-mysqlserver.mysql.database.azure.com",
    user: "mysqladmin@mysqldatabase-mysqlserver",
    password: "Somildebate123",
    database: 'somildebate'
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = conn;
