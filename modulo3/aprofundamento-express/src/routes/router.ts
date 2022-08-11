import { Router } from 'express';
import ToDoController from '../controller/ToDoController';

const router = Router();

const toDoController = new ToDoController();

router.post('/todos', toDoController.post);
router.get('/todos', toDoController.get);
router.get('/todos/status/:completed', toDoController.getByStatus);
router.get('/todos/user/:id', toDoController.getByUser);
router.put('/todos/:id', toDoController.putStatus);
router.delete('/todos/:id', toDoController.delete);

export default router;
