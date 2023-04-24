const sql=require("mysql2");

const pool=sql.createPool({
    host:"localhost",
    user:"root",
    database:"shop",
    password:"Abhinav@1011"
})
module.exports=pool.promise();