const Product = require("./Product");

module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
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
            allowNull: false
        }
    };

    let config = {
        tableName: "user",
        timestamps: false
    };

    const User = sequelize.define("User", cols, config);



    return User;
}