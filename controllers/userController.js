const path = require('path');
const fs = require('fs');

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
    store: (req, res) => {
        let nuevoId = user[user.length - 1].id + 1;
        let id = nuevoId;
        let nuevoUsuario = {
            name: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            direccion: req.body.direccion,
            id: nuevoId,
            imagenPerfil: req.file.originalname,
        }
        user.push(nuevoUsuario);
        fs.writeFileSync(userFilePath, JSON.stringify(user));
        res.redirect('/')
    }
}




module.exports = userController;