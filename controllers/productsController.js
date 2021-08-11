const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController ={
    products: (req, res) => {
        res.render('products/productsAll', {products: products});
    },
    detalle: (req, res) => {
        res.render('detalle');
    },
    carrito: (req, res) => {
        res.render('carrito');
    },
    nuevo: (req, res) => {
		// Do the magic
		res.render('../views/products/admin');
	},
    store: (req, res) => {
        let nuevoId = products[products.length - 1].id + 1;
		let id = nuevoId;
		let nuevoProducto = {
			name: req.body.name,
			price: req.body.price,
			category: req.body.category,
			discount: req.body.discount,
			id: nuevoId
		//	image: req.file.originalname
		}

		products.push(nuevoProducto);
		fs.writeFileSync(productsFilePath, JSON.stringify(products));
		res.redirect('/products/detalle/' + id)
    }
}

module.exports = productsController;
