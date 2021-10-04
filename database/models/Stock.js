module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        in_stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        /* 
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        modifiedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }*/
    };

    let config = {
        tableName: "product_detail",
        timestamps: false
    };

    const Stock = sequelize.define("Stock", cols, config);
    return Stock;
}