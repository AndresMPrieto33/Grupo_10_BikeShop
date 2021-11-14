const Stock = require("./Stock");

module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
        // modifiedAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
        // deletedAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // }
    };

    let config = {
        tableName: "products",
        updatedAt: 'modifiedAt'
        // timestamps: false
    };

    const Stock = sequelize.define("Stock", cols, config);

    /*Stock.associate = models =>{
        Stock.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'stock_id'
        })
    }
*/
    return Stock;
}