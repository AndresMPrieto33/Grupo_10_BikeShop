const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/registro', userController.registro);
router.get('/login', userController.login);
router.get('/admin', userController.admin);

module.exports = router;