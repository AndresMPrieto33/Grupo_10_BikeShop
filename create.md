este es el codigo. va en el userController. Hay que cambiar las rutas y el form ponerle create en ves de storage



create: (req, res) => {
        db.User.create({
            user:{
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcryptjs.hashSync(req.body.password, 10),
                avatar: req.file.filename,
                user_adress: [{
                    address: req.body.address,
                    number: req.body.number,
                    city: req.body.city,
                    postalCode: req.body.postalCode
                }]
            },
            
                include: [{
                    association: 'User',
                    include: 'User_Address'
                }]
            
            
        })
    },



