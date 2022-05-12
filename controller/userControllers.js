const connection = require("../db");

const userController = {
  getAllUsers: (req, res) => {
    connection.query("SELECT * FROM users", function (error, users) {
      if (error) {
        throw error;
      } else {
        res.render("home", {
          users,
        });
      }
    });
  },

  newUserForm: (req, res) => {
    res.render("nuevoFormulario");
  },

  createNewUser: (req, res) => {
    connection.query(
      `INSERT INTO users (firstname, lastname, age) VALUES ("${req.body.nombre}", "${req.body.apellido}", ${req.body.edad})`,
      (error) => {
        if (error) {
          throw error;
        } else {
          res.redirect("/usuarios");
        }
      }
    );
  },

  deleteUser: (req, res) => {
    connection.query(
      `DELETE FROM users WHERE id = ${req.params.id}`,
      (error) => {
        if (error) {
          throw error;
        } else {
          res.redirect("/usuarios");
        }
      }
    );
  },

  modifyUser: (req, res) => {
    connection.query(
      `SELECT * FROM users WHERE ${req.params.id}`,
      (error, user) => {
        if (error) {
          throw error;
        } else {
          res.render("modificarFormulario", {
            user: user[0],
          });
        }
      }
    );
  },

  modifyAndUpdateSQL: (req, res) => {
    connection.query(
      `UPDATE users SET firstname = "${req.body.nombre}", lastname = "${req.body.apellido}", age = ${req.body.edad} WHERE id = ${req.params.id}`,
      (error) => {
        if (error) {
          throw error;
        } else {
          res.redirect("/usuarios");
        }
      }
    );
  },
};

module.exports = userController;
