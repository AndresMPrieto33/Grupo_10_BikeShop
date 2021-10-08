module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
        // createdAt: {
        //     type: DataTypes.DATE,
        //     allowNull: false
        // },
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

    const Category = sequelize.define("Category", cols, config);

    /*Category.associate = models => {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        })
    }
*/

    return Category;
}