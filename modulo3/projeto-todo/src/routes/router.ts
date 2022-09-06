import { Router } from 'express';
import ToDoController from '../controller/ToDoController';
import UserController from '../controller/UserController';

const router = Router();

const userController = new UserController();

router.post('/user', userController.post);
router.put('/user/:id', userController.update);

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getById);

const toDoController = new ToDoController();

router.post('/task', toDoController.post);
router.put('/task/:id', toDoController.update);

router.get('/task', toDoController.getAll);
router.get('/task/:id', toDoController.getById);

export default router;
