import { Router } from 'express';
import RecipeController from '../controller/RecipeController';
import UserController from '../controller/UserController';

const router = Router();

const userController = new UserController();
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/user/profile', userController.profile);
router.get('/user/:id', userController.getById);

const recipeController = new RecipeController();
router.post('/recipe', recipeController.create);
router.get('/recipe/:id', recipeController.getById);

export default router;
