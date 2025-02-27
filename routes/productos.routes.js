const express = require("express");
const path = require("path");

const router = express.Router();

//Enviar la página de productos (GET)
router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/productos.html"));
});

router.post("/", (request, response) => {
  response.sendFile(path.join(__dirname, "../public/carrito.html"));
});

module.exports = router;
