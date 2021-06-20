const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FOLDERS extends Model {
    static associate(models) {
      this.belongsTo(models.users, {
        foreignKey: 'user_idx',
        targetKey: 'user_idx',
      });
    }
  }
  FOLDERS.init(
    {
      folder_idx: {
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
      user_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_root: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent_folder_idx: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'folders',
      timestamps: false,
    }
  );

  return FOLDERS;
};
