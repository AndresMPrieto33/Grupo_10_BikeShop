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
<<<<<<< HEAD
        }

=======
       }
/* 
>>>>>>> 2d6bbbc736be0b9209b4c1102b077d01a1d6b04c
    User.associate = function(models){
        User.belongsTo(models.UserAddress, {
            as: "user_address",
            foreignKey: "user_id"
            });
<<<<<<< HEAD
        }

=======
       }*/
       
>>>>>>> 2d6bbbc736be0b9209b4c1102b077d01a1d6b04c
    return User;
}