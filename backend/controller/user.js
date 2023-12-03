const db = require('../db/db');

class UserController {
    //создать пользователя
   async createUser (req, res) {
        const {first_name, last_name, surname, login_person, password_person, supervisor} = req.body;
        const newPerson = await db.query(`INSERT INTO person (first_name, last_name, surname, login_person, password_person, supervisor) values($1, $2, $3, $4, $5, $6) RETURNING *`, [first_name, last_name, surname, login_person, password_person, supervisor])
        res.json(newPerson.rows[0]);
    }
    //получить всех пользователей
    async getUsers (req, res) {
        const users = await db.query('SELECT * FROM person');
        res.json(users.rows);

    }
//получить одного пользователя
    async getOneUser (req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id]);
        res.json(user.rows[0]);
    }
    //обновить данные пользователя
    async updateUser (req, res, next){
        const {id, first_name, last_name} = req.body;
        const person = await db.query('UPDATE person set first_name = $1, last_name = $2 where id = $3 RETURNING *', [first_name, last_name, id])
        res.json(person.rows[0]);
    }
}

module.exports = new UserController();