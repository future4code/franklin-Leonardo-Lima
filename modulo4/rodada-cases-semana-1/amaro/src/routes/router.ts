import { Router } from 'express';
import TagController from '../controller/TagController';
import ProductController from '../controller/ProductController';

const router = Router();

const productController = new ProductController();
router.post('/product', productController.save);
router.get('/product/search', productController.findByName);
router.get('/product/:id', productController.findById);
router.get('/product', productController.findAll);

const tagController = new TagController();
router.post('/tag', tagController.save);
router.get('/tag', tagController.findAll);

export default router;
