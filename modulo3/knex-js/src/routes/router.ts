import { Router } from 'express';
import ActorController from '../controller/ActorController';

const router = Router();

const actorController = new ActorController();

router.post('/actor', actorController.createActor);
router.get('/actor', actorController.countByGender);
router.put('/actor/:id', actorController.updateSalaryById);
router.get('/actor/:id', actorController.getById);
router.delete('/actor/:id', actorController.deleteActor);

router.get('/actor/name/:name', actorController.getByName);
router.get('/actor/avg-salary/:gender', actorController.avgSalaryByGender);

export default router;
