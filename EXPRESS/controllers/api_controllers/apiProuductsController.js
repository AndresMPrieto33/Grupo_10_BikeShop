const db = require('../../database/models');
const {products: Product} = db;

module.exports = {
    products: (req, res) => {

        db.Product
                .findAll()
                .then(productos =>{
                    let product = [];
                    productos.forEach(element => {
                        let producto = {
                            id: element.id,
                            name: element.name,
                            brand: element.brand,
                            price: element.price,
                            discount: element.discount,
                            description: element.description,
                            stock: element.stock,
                            image: 'http://localhost:3001/images/products/'+ element.image
                        }
                        product.push(producto)
                    });
                    return res.json({
                        meta:{
                            status: 200,
                            totalResults: product.length,
                            url: 'http://localhost:3001/api/products/'
                        },
                        data: product                        
                    })
                })
    },
    'detail': (req, res) => {
        db.Product 
                .findByPk(req.params.id)
                .then(elemento =>{    
                        let producto = {
                            id: elemento.id,
                            name: elemento.name,
                            brand: elemento.brand,
                            price: elemento.price,
                            discount: elemento.discount,
                            description: elemento.description,
                            stock:  elemento.stock,
                            image: 'http://localhost:3001/images/products/'+ elemento.image
                        }                        
                        return res.status(200).json({
                            meta:{
                                status: 200,    
                                url: 'http://localhost:3001/api/products/:id'
                            },
                            data: producto                      
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
                            url: 'http://localhost:3001/api/products/bikes'
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
                            url: 'http://localhost:3001/api/products/accesorios'
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
                            url: 'http://localhost:3001/api/products/parts'
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
                            url: 'http://localhost:3001/api/products/ruedas'
                        },
                        data: products
                    })
                })
                .catch(error => res.json(error))
    }


}