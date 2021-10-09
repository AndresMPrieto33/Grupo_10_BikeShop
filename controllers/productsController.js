const path = require('path');
const fs =require('fs');
//Requiere de la DB
const db = require('../database/models');
const sequelize = db.sequelize;


const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {
    products: (req, res) => {
        db.Product.findAll()
        .then(data => {
            res.render('productsAll', {products: data});
            
        }) 
    },

    detail: (req, res) =>{
        db.Product.findByPk(req.params.id)
        .then(products => {
            res.render('detail', {products: products})
        })
    },

    bikes: (req, res) =>{
        db.Product.findAll({
            where: {
                category: 1
            }
        })
        .then(bikes => {
            res.render('bikes', {bikes})
        })
    },

    accesorios: (req, res) =>{
        db.Product.findAll({
            where: {
                category: 2
            }
        })
        .then(accesorios => {
            res.render('accesorios', {accesorios})
        })
    },
    
    parts: (req, res) => {
        db.Product.findAll({
            where: {
                category: 3
            }
        })
        .then(parts => {
            res.render('parts', {parts})
        })
    },
    ruedas: (req, res) =>{
        db.Product.findAll({
            where:{
                category: 5
            }
        })
        .then(ruedas=> {
            res.render('ruedas', {ruedas: ruedas})
        })
    },
    sale: (req, res) => {
        let sale = products.filter(element => element.category === "sale");
        res.render('ofertas', {sale: sale});
    },
    cart: (req, res) => {
        res.render('cart');
    },
    
    nuevo: (req, res) => {
		res.render('productCreate');
	},
    create: (req, res) => {
        let newProduct = req.body;
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            stock: req.body.stock,
            brand: req.body.brand,
            image: req.file.originalname,
            product_detail: req.body.size,
            category: req.body.category,
            color: req.body.color
        })
        .then(()=>{
            res.redirect('/')
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    delete: (req, res) => {
        let idAQuitar = req.params.id;
        products = products.filter(element => element.id != idAQuitar);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect('/products/productsAll');
    },
    edit: (req, res) => {
        let id = req.params.id;
		let productToEdit = products.find(element => element.id == id);
        res.render('productEdit', {productToEdit: productToEdit}) ;
    }
}


module.exports = productsController;
