const express = require('express');
const router = express.Router();

const apiProductsController = require('../../controllers/api_controllers/apiProuductsController');

router.get('/', apiProductsController.products);



module.exports = router;