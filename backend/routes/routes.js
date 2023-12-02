const Router = require('express');
const router = new Router();

const userController = require('../controller/user');

router.post('/user', userController.createUser);  //создать пользователя
router.get('/user:id', userController.getOneUser); //получить одного пользователя
router.get('/user', userController.getUsers); //получить всех пользователей
router.put('/user', userController.updateUser); //обновить данные пользователя

module.exports = router;