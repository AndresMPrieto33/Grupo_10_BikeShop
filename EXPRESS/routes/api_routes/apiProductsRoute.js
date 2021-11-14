const express = require('express');
const router = express.Router();

const apiProductsController = require('../../controllers/api_controllers/apiProuductsController');

router.get('/', apiProductsController.products);
router.get('/bikes/', apiProductsController.bikes);
router.get('/accesorios', apiProductsController.accesorios);
router.get('/parts', apiProductsController.parts);
router.get('/ruedas', apiProductsController.ruedas);
router.get('/:id/', apiProductsController.detail);




module.exports = router;