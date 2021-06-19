const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TEMPLATES extends Model {
    static associate(models) {
      this.hasMany(models.notes, {
        foreignKey: 'template',
        sourceKey: 'template_idx',
        as: 'noteTemplate',
      });
    }
  }
  TEMPLATES.init(
    {
      template_idx: {
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
      template_context: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'templates',
      timestamps: false,
    }
  );

  return TEMPLATES;
};
