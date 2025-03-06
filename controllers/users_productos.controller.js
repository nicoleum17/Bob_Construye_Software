exports.get_login = (request, response, next) => {
  response.render("login_prod.ejs", {
    estaloggeado: request.session.estaloggeado || false,
    username: request.session.username || "",
  });
};

exports.post_login = (request, response, next) => {
  request.session.estaloggeado = true;
  request.session.username = request.body.username;
  response.redirect("/productos/carrito", {
    estaloggeado: request.session.estaloggeado || false,
    username: request.session.username || "",
  });
};

exports.get_logout = (request, response, next) => {
  request.session.destroy(() => {
    //Este código se ejecuta cuando la sesión se elimina.
    response.redirect("/usuarios/login", {
      estaloggeado: request.session.estaloggeado || false,
      username: request.session.username || "",
    });
  });
};
