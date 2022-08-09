import { Router } from 'express';
import PostController from '../controller/PostController';
import UserController from '../controller/UserController';

const router = Router();

const userController = new UserController();

router.get('/users', userController.get);

const postController = new PostController();

router.get('/posts', postController.get);
router.get('/posts/:id', postController.getById);

export default router;
