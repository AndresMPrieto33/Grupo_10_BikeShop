const path = require('path');

const carritoController = {
    carrito: (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../views/carrito.html'));
    }
}

module.exports = carritoController;