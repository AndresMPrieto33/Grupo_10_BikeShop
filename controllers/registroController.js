const path = require('path');

const registroController ={
    registro: (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../views/registro.html'));
    }
}

module.exports = registroController;