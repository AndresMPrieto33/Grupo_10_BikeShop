const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, DataTypea) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }

    };

    let config = {
        tableName: 'shopping_sessions',
        timeStamps: false
    };

    const Shopping_Sessions = sequelize.define('Shopping_Sessions', cols, config);
    return Shopping_Sessions;
}