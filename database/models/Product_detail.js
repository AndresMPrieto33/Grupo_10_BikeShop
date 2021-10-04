module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        color: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
        /* 
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        modifiedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }*/
    };

    let config = {
        tableName: "product_detail",
        timestamps: false
    };

    const Product_detail = sequelize.define("Product_detail", cols, config);
    return Product_detail;
}