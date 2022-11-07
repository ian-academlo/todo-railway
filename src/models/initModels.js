const Users = require("./users.models");
const Tasks = require("./tasks.models");
const TaskCategories = require("./tasksCategories.models");
const Categories = require("./categories.models");
const Addresses = require("./addresses.models");

const initModels = () => {
  // crear las realciones entre las tablas
  // belongsTo
  // hasOne
  // uno a uno belongsTo / hasOne
  Addresses.belongsTo(Users, { as: "resident", foreignKey: "user_id" });
  Users.hasOne(Addresses, { as: "home", foreignKey: "user_id" });

  // belongsTo
  // hasMany
  Tasks.belongsTo(Users, { alias: "author", foreignKey: "user_id" });
  Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" });

  // belongsTo
  // hasMany
  // la relación muchos a muchos vamos a construirla con dos relaciones
  // 1 a muchos
  // Entre tasks / tasks_categories
  TaskCategories.belongsTo(Tasks, { as: "todo", foreignKey: "task_id" });
  Tasks.hasMany(TaskCategories, { as: "categories", foreignKey: "task_id" });

  // entre tasks_categories / categories
  TaskCategories.belongsTo(Categories, {
    as: "categories",
    foreignKey: "category_id",
  });
  Categories.hasMany(TaskCategories, {
    as: "todos",
    foreignKey: "category_id",
  });

  Categories;
  TaskCategories;
};

module.exports = initModels;
