const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class AUTHS extends Model {
    static associate(models) {
      this.belongsTo(models.users, {
        foreignKey: "user_idx",
        targetKey: "user_idx",
      });
    }
  }
  AUTHS.init(
    {
      auth_idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      user_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "auths",
      timestamps: false,
    }
  );

  return AUTHS;
};
