const path = require('path');

const productsController ={
    products: (req, res) => {
        res.render('productsAll.ejs');
    },
    detalle: (req, res) => {
        res.render('detalle');
    },
    carrito: (req, res) => {
        res.render('carrito');
    }
}

module.exports = productsController;
