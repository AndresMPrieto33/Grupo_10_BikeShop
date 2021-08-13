const path = require('path');

const userController = {
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login')
    },
    admin: (req, res)=>{
        res.render('admin');
    }
}




module.exports = userController;