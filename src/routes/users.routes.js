const Router = require('express');
const UserController = require('../controllers/UserController');

const usersRouter = Router();

usersRouter.get('/', UserController.findAll);
usersRouter.get('/:userId', UserController.findOne);
usersRouter.post('/', UserController.create);
usersRouter.put('/:userId', UserController.update);
usersRouter.delete('/:userId', UserController.delete);

module.exports = usersRouter;
