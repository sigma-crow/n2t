const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class CATEGORIES extends Model {
    static associate(models) {
      this.hasMany(models.notes, {
        foreignKey: "category",
        sourceKey: "category_idx",
        as: "noteCategory",
      });
    }
  }
  CATEGORIES.init(
    {
      category_idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "categories",
      timestamps: false,
    }
  );

  return CATEGORIES;
};
