const { products } = require("../../controllers/productsController");

module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true
        },
        //brand: {
          //  type: DataTypes.STRING,
            //allowNull: false,
        //},
        size: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        //color: {
          //  type: DataTypes.DECIMAL,
            //allowNull: false
        //}
        
        // createdAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        //},
        // modifiedAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // }
    };

    let config = {
        tableName: "products",
        updatedAt: 'modifiedAt'
        // timestamps: false
    };

    const Product_detail = sequelize.define("Product_detail", cols, config);

    /*Product_detail.associate = models =>{
        Product_detail.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'product_detail_id'
        })
    }*/


    return Product_detail;
}