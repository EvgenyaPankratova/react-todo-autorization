

//обращаемся к пакету pg для взаимодействия с базой данных PostrgreSQL

const Pool = require('pg').Pool
const pool = new Pool({
    user:     'postgres',
    password: '4815162342pa',
    host: "localhost",
    port: 5432,
    database: "users_tasks"

});

module.exports = pool;
