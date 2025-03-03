const express = require("express");
const router = express.Router();

//agregar la ruta del controlador al archivo de route
const plantas_controller = require("../controllers/plantas.controller");

// El orden de los middleware importa
// De lo especifico a lo general
// app.get para solo peticiones de tipo GET

//router.get es para registrar un middleware para peticiones HTTP GET
//                    , funcion que está en el controlador
router.get("/agregar", plantas_controller.get_agregar);
router.get("/add", plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post("/agregar", plantas_controller.post_agregar);

router.get("/", plantas_controller.get_root);

module.exports = router;
