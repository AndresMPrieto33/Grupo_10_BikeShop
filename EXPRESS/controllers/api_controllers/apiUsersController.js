const db = require('../../database/models');
const {users: User} = db;
const Op = db.sequelize.Op;

module.exports = {
    users: (req, res) =>{
        db.User
                .findAll()
                .then(users => {
                    let user = [];
                    users.forEach(element => {
                        let usuario ={
                            id: element.id,
                            name: element.name,
                            last_name: element.lastName,
                            address: element.address,
                            number: element.number,
                            city: element.city,
                            postal_code: element.postal_code,
                            avatar: 'http://localhost:3001/images/users/'+ element.avatar
                        }
                        user.push(usuario)
                    });
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            totalResults: user.length,
                            url: 'api/users/'
                        },
                        data: user
                    });
                } )
                .catch(error => res.json(error));
    },
    detail: (req, res) => {
        db.User 
                .findByPk(req.params.id)
                .then(elemento => {
                    let usuario = {
                        id: elemento.id,
                        name: elemento.name,
                        last_name: elemento.lastName,
                        address: elemento.address,
                        number: elemento.number,
                        city: elemento.city,
                        postal_code: elemento.postal_code,
                        avatar: 'http://localhost:3001/images/users/'+ elemento.avatar                        
                    }

                    return res.status(200).json({
                        meta:{
                            status: 200,
                            url: 'http://localhost:3001/api/users/:id'
                        },
                        data: usuario
                    });                    
                })
                .catch(error => res.json(error));
    },
}