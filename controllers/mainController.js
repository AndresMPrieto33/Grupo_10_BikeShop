const path = require('path')

const mainController = {
    home: (req, res)=>{
        res.sendFile(path.resolve(__dirname, '../views/home.html'));
    },

}

module.exports = mainController;