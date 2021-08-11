const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

//RUTA PRODUCTS OK
router.get('/productsAll', productsController.products);
router.get('/carrito', productsController.carrito);
router.get('/detalle', productsController.detalle);
router.get('/detalle/:id', productsController.detalle);
router.get('/nuevo', productsController.nuevo);
router.post('/store', productsController.store);
module.exports = router;