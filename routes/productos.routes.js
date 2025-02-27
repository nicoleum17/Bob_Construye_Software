const express = require("express");
const path = require("path");

const router = express.Router();

//Enviar la página de productos (GET)
router.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "productos.html"));
});

router.post("/", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "views", "carrito.html"));
});

module.exports = router;
