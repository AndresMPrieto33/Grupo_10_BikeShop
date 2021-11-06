const db = require('../../database/models');
const {products: Product} = db;

module.exports = {
    products: (req, res) => {
        db.Product 
                .findAll()
                .then(products => {
                    return res.status(200).json({
                        meta:{
                            stauts: 200,
                            totalResults: products.length,
                            url: 'api/products/'
                        },
                        data: products
                    });                    
                })
                .catch(error => res.json(error));
    }
}