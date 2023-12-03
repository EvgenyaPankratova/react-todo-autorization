const Router = require('express');
const router = new Router();

const taskController = require('../controller/task');

router.post('/task', taskController.createTask);  //создать задачу
router.get('/task:id', taskController.getTasksByUser); //получить задачу пользователя
router.put('/task', taskController.updateTask); //обновить задачу
router.get('/tasks', taskController.getAllTasks); //получить все задачи



module.exports = router;