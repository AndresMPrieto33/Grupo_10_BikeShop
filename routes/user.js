const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, path.resolve(__dirname, '../public/images/users')); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, file.originalname) } 
  });

let upload = multer({ storage: storage });


const userController = require('../controllers/userController');

router.get('/register', userController.register);
router.post('/store', upload.single('image'), userController.store);
router.get('/login', userController.login);
router.get('/admin', userController.admin);


module.exports = router;