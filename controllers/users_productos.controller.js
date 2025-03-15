// auth.controller.js
const Usuario = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

exports.get_signup = (req, res) => {
  const mensaje = req.session.info || "";
  req.session.info = "";

  res.render("login.ejs", {
    isLoggedIn: req.session.isLoggedIn || false,
    username: req.session.username || "",
    isNew: true,
    info: mensaje,
    warning: "",
    csrfToken: req.csrfToken(),
  });
};

exports.post_signup = (req, res) => {
  const usuario = new Usuario(
    req.body.username,
    req.body.password,
    req.body.role
  );
  usuario
    .save()
    .then(() => {
      req.session.info = "Tu usuario se ha creado";
      res.redirect("/usuarios/login");
    })
    .catch((err) => console.log(err));
};

exports.get_login = (req, res) => {
  const mensaje = req.session.info || "";
  req.session.info = "";
  const warning = req.session.warning || "";
  req.session.warning = "";

  res.render("login.ejs", {
    isLoggedIn: req.session.isLoggedIn || false,
    username: req.session.username || "",
    isNew: false,
    info: mensaje,
    warning: warning,
    csrfToken: req.csrfToken(),
  });
};

exports.post_login = (req, res) => {
  Usuario.fetchOne(req.body.username)
    .then(([rows]) => {
      if (rows.length > 0) {
        bcrypt.compare(req.body.password, rows[0].password).then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.username = req.body.username;
            req.session.role = rows[0].role;
            return req.session.save(() => res.redirect("/dashboard"));
          } else {
            req.session.warning = "Usuario y/o contraseña incorrectos";
            res.redirect("/usuarios/login");
          }
        });
      } else {
        req.session.warning = "Usuario y/o contraseña incorrectos";
        res.redirect("/usuarios/login");
      }
    })
    .catch((err) => console.log(err));
};

exports.get_logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/usuarios/login");
  });
};

// Middleware para verificar roles
exports.requireRole = (role) => {
  return (req, res, next) => {
    if (req.session.role === role) {
      next();
    } else {
      res.status(403).send("Acceso denegado");
    }
  };
};
