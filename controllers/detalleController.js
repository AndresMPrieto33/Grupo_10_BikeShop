const path = require('path');

const detalleController = {
    detalle: (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../views/detalle.html'))
    }
}

module.exports = detalleController;