const path = require('path');

const productsController ={
    products: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/products/productsAll.ejs'));
    }
}

module.exports = productsController;
