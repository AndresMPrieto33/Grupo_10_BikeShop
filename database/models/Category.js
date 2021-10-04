module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
        tableName: "category",
        timestamps: false
    };

    const Category = sequelize.define("Category", cols, config);
    return Category;
}