const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

//RUTA PRODUCTS OK
router.get('/products/productsAll', productsController.products);
router.get('/carrito', productsController.carrito);
router.get('/detalle', productsController.detalle);

module.exports = router;