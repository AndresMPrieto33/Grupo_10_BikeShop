const path = require('path');

const userController = {
    registro: (req, res)=>{
        res.render('registro');
    },
    login: (req, res)=>{
        res.render('login');
    },
    admin: (req, res)=>{
        res.render('admin');
    }
}

module.exports = userController;