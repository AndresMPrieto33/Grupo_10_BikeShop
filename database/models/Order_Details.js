module.exports = (sequelize, DataTypes) => {
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.decimal,
            allowNull: false,
        },
        payment_details_id: {
            type: DataTypes.INTEGER,
            allowNull: fasle
        }
    };

    let config = {
        tableName: 'order_details',
        timeStamps: false
    };

    const Order_Details = sequelize.define('Order_Details', cols, config);
    return Order_Details;
}