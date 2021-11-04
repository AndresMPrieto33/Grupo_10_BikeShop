const path = require('path');
const fs =require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    // home: (req, res) => {
    //     let nuevos = products.filter(elment => elment.category === 'new'); // a prueba
    //     let ofertas = products.filter(elment => elment.category === 'sale'); // a prueba
    //     res.render('home', {nuevos: nuevos, ofertas: ofertas});
    // },
    sale: (req, res) => {
        let sale = products.filter(element => element.category === "sale");
        res.render('home', {sale: sale});
    },
}

module.exports = mainController;