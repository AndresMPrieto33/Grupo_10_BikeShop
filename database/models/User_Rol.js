module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
            //allowNull: false
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    let config = {
        tableName: 'user_rol',
        
    };

    const User_Rol = sequelize.define('UserRol', cols, config);

    User_Rol.associate = function(models){
        // Relación
        User_Rol.hasMany(models.User, {
            as: "user",
            foreignKey: "user_rol_id"
            });
       }
    
    return User_Rol;
}