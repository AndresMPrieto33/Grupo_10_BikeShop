module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true 
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
        category: {
            type: DataTypes.INTEGER,
        },
        brand: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
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
        tableName: "products",
        updatedAt: 'modifeidAt'
        // timestamps: false
    };

    const Product = sequelize.define("Product", cols, config);

    /*Product.associate = models => {
        //Categoria
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })

        //Detalle de producto
        Product.belongsTo(models.Product_detail, {
            as: 'product_detail',
            foreignKey: 'product_detail_id'
        })        
        
        //Stock
        Product.belongsTo(models.Stock, {
            as: 'stock',
            foreignKey: 'stock_id'
        })

    }*/


    return Product;
}

