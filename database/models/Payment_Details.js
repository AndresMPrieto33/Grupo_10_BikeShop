module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        order_details_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }

    };

    let config = {
        tableName: 'payment_details',
        timeStamps: false
    };

    const Payment_Details = sequelize.define('Payment_Details', cols, config);
    return Payment_Details;
}