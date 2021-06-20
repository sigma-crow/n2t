const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NOTES extends Model {
    static associate(models) {
      this.belongsTo(models.users, {
        foreignKey: 'user_idx',
        targetKey: 'user_idx',
      });
      this.belongsTo(models.categories, {
        foreignKey: 'category',
        targetKey: 'category_idx',
        as: 'categoryNote',
      });
      this.belongsTo(models.templates, {
        foreignKey: 'template',
        targetKey: 'template_idx',
        as: 'tempateNote',
      });
    }
  }

  NOTES.init(
    {
      note_idx: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      user_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      note_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      note_context: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      is_public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      template: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent_folder_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      update_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'notes',
      timestamps: false,
    }
  );

  return NOTES;
};
