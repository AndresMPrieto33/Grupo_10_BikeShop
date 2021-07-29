const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const loginController = require('../controllers/loginController');
const registroController = require('../controllers/registroController');
const carritoController = require('../controllers/carritoController');
const detalleController = require('../controllers/detalleController');

router.get('/', mainController.home);
router.get('/login', loginController.login);
router.get('/registro', registroController.registro);
router.get('/carrito', carritoController.carrito);
router.get('/detalle', detalleController.detalle);

module.exports = router;