const Planta = require("../models/planta.model");

exports.get_agregar = (request, response, next) => {
  console.log(request.session.username);
  response.render("agregar_planta", {
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || " ",
  });
};

exports.post_agregar = (request, response, next) => {
  console.log(request.body);
  const mi_planta = new Planta(request.body.nombre);
  mi_planta
    .save()
    //then: funcion que se ejecuta si la promesa se cumple
    .then(() => {
      request.session.info = "La planta ${mi_planta.nombre} se ha creado";
      response.redirect("/plantas");
    })
    //catch: si no se cumple
    .catch((error) => {
      console.log(error);
    });

  response.redirect("/plantas/");
};

exports.get_root = (request, response, next) => {
  const mensaje = request.session.info || "";
  if (request.session.info) {
    request.session.info = " ";
  }
  response.render("lista_plantas", {
    isLoggedIn: request.session.isLoggedIn || false,
    username: request.session.username || " ",
    plantas: Planta.fetchAll(),
    info: mensaje,
  });
};
