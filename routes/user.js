const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const storage = multer.diskStorage({ 
   destination: function (req, file, cb) { 
      cb(null, path.resolve(__dirname, '../public/images/users')); 
   }, 
   filename: function (req, file, cb) { 
      cb(null, file.originalname) } 
   });

const upload = multer({ storage: storage });

const userController = require('../controllers/userController');

// const validations = [
//    body('firstName').notEmpty().withMessage('Tienes que ingresar tu nombre'),
//    body('lastName').notEmpty().withMessage('Tienes que ingresar tu apellido'),
//    body('email').notEmpty().withMessage('Ingresa tu email').bail().isEmail().withMessage('Debes ingresar un formato de email valido'),
//    body('address').notEmpty().withMessage('Ingresa una dirección'),
//    body('password').notEmpty().withMessage('Debes escribir una contraseña'),
//    body('image').custom((value, { req }) => {
//       let file = req.file;
//       let acceptedExtentions = ['.jpg', '.png', '.gif'];
//       if(!file){
//          throw new Error('Tienes que subir una imagen');
//       }else{
//          let fileExtention = path.extname(file.originalname);
//          if(!acceptedExtentions.includes(fileExtention)){
//             throw new Error(`Las extenciones de arcivo permitidas son ${acceptedExtentions.join(', ')}`)
//          }

//       }
//       return true;
// })

// ]

//FORMUÑARIO DE REGISTRO
router.get('/register', userController.register);
router.post('/storage', upload.single('image'), userController.storage);

//LOGIN
router.get('/login', userController.login);
router.get('/admin', userController.admin);


module.exports = router;