const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController');

router.get('/registro', registroController.registro);

module.exports = router;