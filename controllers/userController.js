const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');

const userFilePath = path.join(__dirname, '../data/users.json');
const user = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const userController = {
    register: (req, res) => {
        console.log(req.cookies.userEmail);
        return res.render('register');
    },

    login: (req, res) => {
        res.render('login')
    },
    
    profile: (req, res) => {
        res.render('userProfile', {
            user: req.session.userLogged
        });
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60)})
                }

                return res.redirect('/user/profile');
            }
            
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'El usuario y/o contraseña no son válidos'
                    }
                }
            });
        }


        return res.render('login', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });
    },
    
    storage: (req, res) => {
        const resutlValidation = validationResult(req);

        if (resutlValidation.errors.length > 0) {
            return res.render('register', {
                errors: resutlValidation.mapped(),
                oldData: req.body
            });
        }


        let userInDB = User.findByField('email', req.body.email);


        if (userInDB) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: "Este email ya esta registrado"
                    }
                },
                oldData: req.body
            });
        }


        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file.filename

        }
        
        let userCreated = User.create(userToCreate);
        return res.redirect('/user/login');
    },
    
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}




module.exports = userController;