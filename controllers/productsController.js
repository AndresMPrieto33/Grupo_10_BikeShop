const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController ={
    products: (req, res) => {
        res.render('products/productsAll');
    },
    detalle: (req, res) => {
        res.render('detalle');
    },
    carrito: (req, res) => {
        res.render('carrito');
    }
}

module.exports = productsController;
