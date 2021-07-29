const path = require('path');

const registroController ={
    registro: (req, res)=>{
        // res.sendFile(path.resolve(__dirname, '../views/registro.html'));
        res.render('registro')
    }
}

module.exports = registroController;