import { Router } from 'express';
import { UserController } from '../controller/UserController';

const router = Router();

const userController = new UserController();

router.post('/users/signup', userController.signup);
router.post('/users/login', userController.login);
router.get('/users/', userController.getUsers);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userController.editUser);

export default router;
