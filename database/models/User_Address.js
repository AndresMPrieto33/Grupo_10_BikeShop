

module.exports = (sequelize, DataTypes) => {
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
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postal_code: DataTypes.STRING,
        allowNull: false
    };

    let config ={
        tableName: 'user_address',
        timeStamps: false
    };

    const User_Address = sequelize.define("User_Address", cols, config);
    return User_Address;

}