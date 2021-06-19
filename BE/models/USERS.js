const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class USERS extends Model {
    static associate(models) {
      this.hasOne(models.auths, {
        foreignKey: 'user_idx',
        targetKey: 'user_idx',
      });
      this.hasMany(models.folders, {
        foreignKey: 'user_idx',
        sourceKey: 'user_idx',
      });

      this.hasMany(models.notes, {
        foreignKey: 'user_idx',
        sourceKey: 'user_idx',
      });
    }
  }
  USERS.init(
    {
      user_idx: {
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      oauth: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'users',
      timestamps: false,
    }
  );

  return USERS;
};
