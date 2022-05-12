require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

const router = require("./routes/routes");

app.set("view engine", "ejs");

app.use("/usuarios", router);

app.listen(port, () => {
  console.log(
    `http://localhost:${port}`,
    `Servidor corriendo en el puerto ${port}`
  );
});
