const express = require("express");
const path = require("path");

const router = express.Router();

//Enviar la página de productos (GET)
router.get("/", (request, response) => {
  response.render("agregar_productos");
});

router.post("/", (request, response) => {
  response.render("agregar_carrito");
});

module.exports = router;
