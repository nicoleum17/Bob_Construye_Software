const Producto = require("../models/productos.model ");

exports.get_producto = (request, response) => {
  response.render("agregar_productos", {
    estaloggeado: request.session.estaloggeado || false,
    username: request.session.username || "",
  });
};

exports.post_producto = (request, response, next) => {
  console.log(request.body);

  const mi_producto = new Producto(request.body.nombre, request.body.cantidad);
  mi_producto
    .save()
    .then(() => {
      response.redirect("/productos");
      request.session.info = `El producto ${mi_producto.nombre} se ha creado con cantidad ${mi_producto.cantidad}`;
    })
    .catch((error) => {
      console.log(error);
    });
};
