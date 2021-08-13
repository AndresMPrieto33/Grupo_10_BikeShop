const path = require('path');
const fs =require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    home: (req, res) => {
        let nuevos = products.filter(elment => elment.category === 'new'); 
        let ofertas = products.filter(elment => elment.category === 'sale'); 
    }
}

module.exports = mainController;