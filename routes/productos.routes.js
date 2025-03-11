const express = require("express");

const router = express.Router();
const productos_controller = require("../controllers/productos.controller");

// Ruta para agregar un producto (POST)
router.post("/agregar-carrito", productos_controller.post_producto);

// Ruta para mostrar el formulario de productos (GET)
router.get("/", productos_controller.get_producto);

module.exports = router;
