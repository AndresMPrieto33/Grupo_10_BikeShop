module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        order_details_id: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'order_items',
        timeStamps: false
    };

    const Order_Items = sequelize.define('Order_Items', cols, config);
    return Order_Items;
}