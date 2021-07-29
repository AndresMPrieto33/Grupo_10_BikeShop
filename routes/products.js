const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/productsAll', productsController.products);
router.get('/carrito', productsController.carrito);
router.get('/detalle', productsController.detalle);

module.exports = router;