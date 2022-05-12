const mysql = require("mysql2");
const express = require("express");
const router = express.Router();

const userController = require("../controller/userControllers");

router.get("/", userController.getAllUsers);

router.get("/crear", userController.newUserForm);

router.post("/crear", userController.createNewUser);

router.get("/delete/:id", userController.deleteUser);

router.get("/editar/:id", userController.modifyUser);

router.post("/editar/:id", userController.modifyAndUpdateSQL);

module.exports = router;

/* Rutas */
