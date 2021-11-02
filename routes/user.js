const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const User = require('../models/User');
const db = require('../database/models');
const sequelize = db.sequelize;

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, 'public/images/users');
   },
   filename: function (req, file, cb) {
      cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
   }
})

const upload = multer({ storage });

const userController = require('../controllers/userController');


const validations = [
   body('name').notEmpty().withMessage('Tienes que ingresar tu nombre').bail().isLength({ min: 2 }).withMessage('El nombre debe tener al menos dos caracteres'),
   body('lastName').notEmpty().withMessage('Tienes que ingresar tu apellido').bail().isLength({ min: 2 }).withMessage('El apellido debe tener al menos dos caracteres'),
   body('email').notEmpty().withMessage('Tienes que ingresar un email').bail().isEmail().withMessage('Debes ingresar un formato de email valido').bail()
      .custom((value, { req }) => {
      let userInDB = User.findByField('email', req.body.email);
      if (userInDB) {
         throw new Error('Este mail ya esta registrado');
      } else {
         return true;
      }}),
   body('address').notEmpty().withMessage('Ingresa una dirección'),
   body('number').notEmpty().withMessage('Ingresa un numero para la dirección'),
   body('postal_code').notEmpty().withMessage('Ingresa un codigo postal'),
   body('city').notEmpty().withMessage('Ingresa una ciudad'),
   body('password').notEmpty().withMessage('Debes escribir una contraseña').bail()
      .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
   body('avatar').custom((value, { req }) => {
      let file = req.file;
      let acceptedExtentions = ['.jpg', '.png', '.gif', 'jpeg'];
      if (!file) {
         throw new Error('Tienes que subir una imagen');
      } else {
         let fileExtention = path.extname(file.originalname);
         if (!acceptedExtentions.includes(fileExtention)) {
            throw new Error(`Las extenciones de arcivo permitidas son ${acceptedExtentions.join(', ')}`)
         }
      } return true;
   })]


router.get('/register', guestMiddleware, userController.register);
router.post('/storage', upload.single('avatar'), validations, userController.storage);

router.post('/create', upload.single('avatar'), validations, userController.create);
router.get('/detail/:id/', userController.detail);

router.get('/login', guestMiddleware, userController.login);
router.post('/login', userController.loginProcess);

router.get('/edit/:id/', userController.edit);
router.post('/edit/:id/', upload.single('avatar'), userController.updated);

router.get('/profile', authMiddleware, userController.profile);
router.get('/logout', userController.logout);

module.exports = router;