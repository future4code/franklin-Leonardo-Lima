import { Router } from 'express';
import UserController from '../controller/UserController';

const router = Router();

const userController = new UserController();
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/user/:id', userController.getById);
router.get('/user/profile', userController.profile);

export default router;
