require('dotenv').config()

//обращаемся к пакету pg для взаимодействия с базой данных PostrgreSQL

const Pool = require('pg').Pool
const pool = new Pool({
    user:     'postgres',
    password: process.env.PASSWORD,
    host: "localhost",
    port: 5432,
    database: "users_tasks"

});



module.exports = pool;
