const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
            //allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        user_rol_Id: {
            type: DataTypes.INTEGER,
            //allowNull: false,
            underscored: true
        },
        address: {
            type: DataTypes.STRING
        },
        number: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.STRING
        },
        postal_code: {
            type:DataTypes.STRING
        }
    };

    let config = {
        tableName: "user",
        timestamps: false,
    };

    const User = sequelize.define("User", cols, config);

    User.associate = function(models){
        User.belongsTo(models.UserRol, {
            as: "user_rol",
            foreignKey: "user_rol_id"
            });
        }



    return User;
}