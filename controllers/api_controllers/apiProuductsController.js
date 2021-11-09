const db = require('../../database/models');
const {products: Product} = db;

module.exports = {
    products: (req, res) => {
        db.Product 
                .findAll()
                .then(products => {
                    return res.status(200).json({
                        meta:{
                            status: 200,
                            totalResults: products.length,
                            url: 'api/products/'
                        },
                        data: products
                    });                    
                })
                .catch(error => res.json(error));
    },
    detail: (req, res) => {
        db.Product 
                .findByPk(req.params.id)
                .then(products => {
                    return res.status(200).json({
                        meta:{
                            status: 200,
                            url: 'api/products/:id'
                        },
                        data: products
                    });                    
                })
                .catch(error => res.json(error));
    },
    bikes: (req, res) =>{
        db.Product
                .findAll({
                    where: {
                        category: 1
                    }
                })
                .then(products => {
                    return res.status(200).json({
                        meta:{
                            status: 200,
                            totalProducts: products.length,
                            url: 'api/products/bikes'
                        },
                        data: products
                    })
                })
                .catch(error => res.json(error));
    },
    accesorios: (req, res) =>{
        db.Product.findAll({
                    where: {
                        category: 2
                    }
                })
                .then(products => {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            totalProducts: products.length,
                            url: 'api/products/accesorios'
                        },
                        data: products
                    })
                })
                .catch(error => res.json(error))
    },
    parts: (req, res) =>{
        db.Product.findAll({
                    where: {
                        category: 3
                    }
                })
                .then(products => {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            totalProducts: products.length,
                            url: 'api/products/parts'
                        },
                        data: products
                    })
                })
                .catch(error => res.json(error))
    },
    ruedas: (req, res) =>{
        db.Product.findAll({
                    where: {
                        category: 5
                    }
                })
                .then(products => {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            totalProducts: products.length,
                            url: 'api/products/ruedas'
                        },
                        data: products
                    })
                })
                .catch(error => res.json(error))
    }


}