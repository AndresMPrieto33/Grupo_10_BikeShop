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

    
    return User_Rol;
}