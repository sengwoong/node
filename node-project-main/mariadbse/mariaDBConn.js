const mariadb = require('mariadb');
const vals = require('./consts.js');
 
const pool = mariadb.createPool({
    host: '127.0.0.1', port:3306,
    user: 'dev01', password: '1234',
    connectionLimit: 5
});  
 
async function GetUserList(){
    let conn, rows;
    try{
        conn = await pool.getConnection();
        conn.query('USE nodejs_test');
        rows = await conn.query('SELECT * FROM users');
    }
    catch(err){
        
        throw console.log(err);
    }
    finally{
        if (conn) conn.end();
        return rows[0];
    }
}
 
module.exports = {
    getUserList: GetUserList
}