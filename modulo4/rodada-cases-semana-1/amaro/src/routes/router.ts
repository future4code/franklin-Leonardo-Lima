import { Router } from 'express';
import TagController from '../controller/TagController';
import UserController from '../controller/UserController';

const router = Router();

const userController = new UserController();
router.post('/product', userController.save);
router.get('/product/search', userController.findByName);
router.get('/product/:id', userController.findById);
router.get('/product', userController.findAll);

const tagController = new TagController();
router.post('/tag', tagController.save);
router.get('/tag', tagController.findAll);

export default router;
