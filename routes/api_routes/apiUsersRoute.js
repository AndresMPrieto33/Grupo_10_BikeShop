const express = require('express');
const router = express.Router();

const apiUsersController = require('../../controllers/api_controllers/apiUsersController');

router.get('/', apiUsersController.users);
router.get('/:id', apiUsersController.detail);



module.exports = router;
