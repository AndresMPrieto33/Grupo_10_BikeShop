module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    let config = {
        tableName: 'user_rol',
        
    };

    const User_Rol = sequelize.define('User_Rol', cols, config);

    User_Rol.associate = models =>{
        User_Rol.hasMany(models.Product, {
            as:'Product',
            foreignKey: 'user_rol_id'
        })
    }

    return User_Rol;
}