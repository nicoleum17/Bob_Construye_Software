const express = require("express");
const path = require("path");

const router = express.Router();

const productos_controller = require("../controllers/productos.controller");

//Enviar la página de productos (GET)
router.get("/", productos_controller.get_producto);

router.post("/", productos_controller.post_producto);

module.exports = router;
