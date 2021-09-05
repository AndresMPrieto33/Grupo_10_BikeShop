const path = require('path');
const fs =require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    products: (req, res) => {
        res.render('productsAll', {products: products});
    },
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
        let id = req.params.id;
		let detalle = products.find(element => element.id == id);
		res.render('detail', {detalle: detalle});
        
    },
    nuevo: (req, res) => {
		res.render('admin');
	},
    store: (req, res) => {
        let nuevoId = products[products.length - 1].id + 1;
		let id = nuevoId;
		let nuevoProducto = {
			name: req.body.name,
			price: req.body.price,
			category: req.body.category,
			discount: req.body.discount,
			id: nuevoId,
			image: req.file.originalname,
		}

		products.push(nuevoProducto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/products/detail/' + id)
    },
    delete: (req, res) => {
        let idAQuitar = req.params.id;
        products = products.filter(element => element.id != idAQuitar);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect('/products/productsAll');
    }
}


module.exports = productsController;