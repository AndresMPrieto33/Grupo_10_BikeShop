const path = require('path');
const fs = require('fs');
const { validationResult} = require('express-validator');

const userFilePath = path.join(__dirname, '../data/users.json');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userController = {
    register: (req, res) => {
        res.render('register');
    },
    login: (req, res) => {
        res.render('login')
    },
    admin: (req, res) => {
        res.render('admin');
    },
    storage: (req, res) => {
        // const resutlValidation = validationResult(req);

        // if(resutlValidation.errors.length > 0){
        //     return res.render('register', {
        //         errors: resutlValidation.mapped(),
        //         oldData: req.body
        //     });
        // }

        let nuevoId = user[user.length - 1].id + 1;
        let id = nuevoId;
        let nuevoUsuario = {
            id: nuevoId,
            name: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            caracteristicas: req.body.caracteristicas,
            imagenPerfil: req.file.originalname,
        }
        user.push(nuevoUsuario);
        fs.writeFileSync(userFilePath, JSON.stringify(user, null, 2));
        return res.redirect('/user/login');
    }
}




module.exports = userController;