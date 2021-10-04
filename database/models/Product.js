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
        description: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        discount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_detail_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        /* 
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        modifiedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt:{ 
            type: DataTypes.DATE,
            allowNull: false
        }*/
    };

    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define("Product", cols, config);
    return Product;
}

    