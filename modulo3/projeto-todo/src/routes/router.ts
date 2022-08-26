import { Router } from 'express';
import ToDoController from '../controller/ToDoController';

const router = Router();

const toDoController = new ToDoController();

router.get('/tod-do', toDoController.get);

export default router;
