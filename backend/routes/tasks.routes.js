const Router = require('express');
const router = new Router();

const taskController = require('../controller/task');

router.post('/task', taskController.createTask);  //создать задачу
router.get('/task', taskController.getTasksByUser); //получить задачу пользователя
router.put('/task', taskController.updateTask); //обновить задачу


module.exports = router;