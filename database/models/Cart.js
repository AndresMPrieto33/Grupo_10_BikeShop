module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        shopping_session_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    }
    let config = {
        tableName: 'cart',
        timeStamps: false
        
    };

    const Cart = sequelize.define('Cart', cols, config);
    return Cart;
}