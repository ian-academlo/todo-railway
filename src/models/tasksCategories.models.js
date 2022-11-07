const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const TaskCategories = db.define(
  "task_categories",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "category_id",
    },
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "task_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = TaskCategories;
