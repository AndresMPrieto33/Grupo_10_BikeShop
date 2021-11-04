const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const {body} = require('express-validator');

const Product = require('../database/models/Product');
const db = require('../database/models');
const sequelize = db.sequelize;

const storage = multer.diskStorage({ 
   destination: function (req, file, cb) { 
      cb(null, 'public/images/products'); 
   }, 
   filename: function (req, file, cb) { 
      cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname))} 
   });

let upload = multer({ storage: storage });

const productsController = require('../controllers/productsController');

const validation = [
   body('name').notEmpty().withMessage('El nombre del producto no puede estar vacio').bail().isLength({ min: 5 }).withMessage('El nombre debe tener al menos cinco caracteres'),
   body('description').isLength({min: 20}).withMessage('La descripcion del producto debe tener al menos 20 caracteres'),
   body('image').custom((value, { req }) => {
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
   }),

];

router.get('/cart', productsController.cart);
router.get('/detail/:id/', productsController.detail);
router.get('/productsAll', productsController.products);
router.get('/bikes', productsController.bikes)
router.get('/accesorios', productsController.accesorios);
router.get('/parts', productsController.parts);
router.get('/ruedas', productsController.ruedas);
router.get('/ofertas', productsController.sale);
router.get('/nuevo', validation, productsController.nuevo);
router.post('/create', upload.single('image'), validation, productsController.create);
router.post('/delete/:id', productsController.delete);
router.get('/edit/:id/', validation, productsController.edit);
router.post('/edit/:id/', upload.single('image'), validation, productsController.updated);
router.get('/search', productsController.search);

module.exports = router;