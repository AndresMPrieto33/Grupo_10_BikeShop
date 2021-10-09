const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({ 
   destination: function (req, file, cb) { 
      cb(null, path.resolve(__dirname, '../public/images/products')); 
   }, 
   filename: function (req, file, cb) { 
      cb(null, file.originalname) } 
   });

let upload = multer({ storage: storage });

const productsController = require('../controllers/productsController');

router.get('/cart', productsController.cart);
router.get('/detail/:id/', productsController.detail);
router.get('/productsAll', productsController.products);
router.get('/bikes', productsController.bikes)
router.get('/accesorios', productsController.accesorios);
router.get('/parts', productsController.parts);
router.get('/ruedas', productsController.ruedas);
router.get('/ofertas', productsController.sale);
router.get('/nuevo', productsController.nuevo);
router.post('/create', upload.single('image'), productsController.create);
router.post('/delete/:id', productsController.delete);
router.get('/edit/:id/', productsController.edit);
router.post('/edit/:id/', upload.single('image'), productsController.updated);


module.exports = router;