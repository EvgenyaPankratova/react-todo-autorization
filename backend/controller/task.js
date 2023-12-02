const db = require('../db/db');

class TaskController{
    //создать задачу
    async createTask(req, res){
        const {title, description_task, finished, created, updated, priority_task, status_task, creator_id, responsible_id} = req.body
        const newTask = await db.query(`INSERT INTO task (title, description_task, finished, created, updated, priority_task, status_task, creator_id, responsible_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [title, description_task, finished, created, updated, priority_task, status_task, creator_id, responsible_id])
        res.json(newTask.rows[0])
    }
//получить задачи пользователя
    async getTasksByUser(req, res){
        const id = req.query.id
        const tasks = await db.query(`select * from task where creator_id = $1`, [id])
        res.json(tasks.rows)
    }
//обновить задачу
    async updateTask(req, res){
        const {id, title, description_task, finished, updated, priority_task, status_task} = req.body;
        const task = await db.query('UPDATE task set title = $1, description_task = $2, finished = $3, updated = $4, priority_task = $5, status_task = $6 where id = $7 RETURNING *', [title, description_task, finished, updated, priority_task, status_task, id])
        res.json(task.rows[0]);
    }
    
}

module.exports = new TaskController();