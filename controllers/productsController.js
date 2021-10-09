const path = require('path');
const fs =require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//Requiere de la DB
const db = require('../database/models');

const productsController = {
    products: (req, res) => {
        db.Product.findAll()
        .then(data => {
            res.render('productsAll', {products: data});
            
        }) 
    },

    /*linea vieja
    res.render('productsAll', {products: products});
    */
    bikes: (req, res) => {
        let bikes = products.filter(element => element.type === "bicicletas");
        res.render('bikes', {bikes: bikes});
    },
    accesorios:(req, res) =>{
        let accesorios = products.filter(element => element.type === "accesorios");
        res.render('accesorios', {accesorios: accesorios});
    },
    parts: (req, res) => {
        let parts = products.filter(element => element.type === "partes");
        res.render('parts', {parts: parts});
    },
    ruedas: (req, res) =>{
        let ruedas = products.filter(element => element.type === "ruedas");
        res.render('ruedas', {ruedas: ruedas});
    },
    sale: (req, res) => {
        let sale = products.filter(element => element.category === "sale");
        res.render('ofertas', {sale: sale});
    },
    cart: (req, res) => {
        res.render('cart');
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id) 
            .then(function (product) {
                res.render('detail', {product: product});
            })
        /*
        let id = req.params.id;
		let detalle = products.find(element => element.id == id);
		res.render('detail', {detalle: detalle});
        */
    },
    nuevo: (req, res) => {
		res.render('productCreate');
	},
    // store: (req, res) => {
    //     let nuevoId = products[products.length - 1].id + 1;
	// 	let id = nuevoId;
	// 	let nuevoProducto = {
	// 		name: req.body.name,
	// 		price: req.body.price,
	// 		category: req.body.category,
	// 		discount: req.body.discount,
	// 		id: nuevoId,
	// 		image: req.file.originalname,
	// 	}

	// 	products.push(nuevoProducto);
	// 	fs.writeFileSync(productsFilePath, JSON.stringify(products));
	// 	res.redirect('/products/detail/' + id)
    // },
    create: (req, res) => {
        let newProduct = req.body;
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            stock: req.body.stock,
            //brand: req.body.brand,
            image: req.file.originalname,
            product_detail: req.body.size,
            category: req.body.category
            //size: req.body.size,
            //color: req.body.color
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