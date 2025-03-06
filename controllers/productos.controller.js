exports.get_producto = (request, response) => {
  response.render("agregar_productos", {
    estaloggeado: request.session.estaloggeado || false,
    username: request.session.username || "",
  });
};

exports.post_producto = (request, response) => {
  response.render("agregar_carrito", {
    estaloggeado: request.session.estaloggeado || false,
    username: request.session.username || "",
  });
};
