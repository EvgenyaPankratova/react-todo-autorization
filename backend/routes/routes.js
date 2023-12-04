const Router = require('express');
const router = new Router();

const userController = require('../controller/user');

router.post('/user', userController.createUser);  //создать пользователя
// router.get('/user/:id', userController.getOneUser); //получить одного пользователя по id
router.get('/user/:login_person', userController.getOneUserByLogin); //получить одного пользователя по логину
router.get('/user', userController.getUsers); //получить всех пользователей
router.put('/user', userController.updateUser); //обновить данные пользователя

module.exports = router;