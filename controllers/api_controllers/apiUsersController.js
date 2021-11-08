const db = require('../../database/models');
const {users: User} = db;
const Op = db.sequelize.Op;

module.exports = {
    users: (req, res) =>{
        User
                .findAll()
                .then(users => {
                    return res.status(200).json({
                        meta: {
                            status: 200,
                            totalResults: users.length,
                            url: 'api/users/'
                        },
                        data: users
                    });
                } )
                .catch(error => res.json(error));
    },
    detail: (req, res) => {
        db.User 
                .findByPk(req.params.id)
                .then(user => {
                    return res.status(200).json({
                        meta:{
                            status: 200,
                            url: 'api/users/:id'
                        },
                        data: user
                    });                    
                })
                .catch(error => res.json(error));
    },
}