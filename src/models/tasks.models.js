const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users = require("./users.models");

const Tasks = db.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "is_complete",
  },
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id",
    references: {
      model: Users,
      key: "id",
    },
    allowNull: false,
  },
});

module.exports = Tasks;
