const express = require("express");
const router = express.Router();

const users_productosController = require("../controllers/users_productos.controller");

router.get("/login", users_productosController.get_login);
router.post("/login", users_productosController.post_login);
router.get("/logout", users_productosController.get_logout);

module.exports = router;
