const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const Users = require("./models/users.models");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

initModels();

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

// sync
db.sync({ force: true }) // devuelve una promesa
  .then(() => console.log("Soncronizado correctamente"))
  .catch((error) => console.log(error));

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.get("/users", async (req, res) => {
  const result = await Users.getAll();
  res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
