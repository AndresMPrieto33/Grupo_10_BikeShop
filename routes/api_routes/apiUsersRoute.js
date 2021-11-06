const express = require('express');
const router = express.Router();

const apiUsersController = require('../../controllers/api_controllers/apiUsersController');

router.get('/', apiUsersController.users);



module.exorts = router;
