const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/cart', productsController.cart);
router.get('/detail/:id/', productsController.detail);
router.get('/productsAll', productsController.products);
router.get('/bikes', productsController.bikes)
router.get('/accesorios', productsController.accesorios);
router.get('/parts', productsController.parts);
router.get('/ruedas', productsController.ruedas);
router.get('/ofertas', productsController.sale);
router.get('/nuevo', productsController.nuevo);
router.post('/store', productsController.store);


module.exports = router;