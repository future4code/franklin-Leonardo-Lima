import { Router } from 'express';
import ClientController from '../controller/ClientController';
import PaymentController from '../controller/PaymentController';

const router = Router();

const clientController = new ClientController();
router.post('/client', clientController.save);
router.post('/client/:id/token', clientController.getClientToken);
router.get('/client/:id', clientController.findById);

const paymentController = new PaymentController();
router.post('/payment', paymentController.save);

export default router;
