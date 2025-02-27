const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));

// Middleware para procesar JSON y formularios
app.use(express.json()); // 📌 ¡Esto soluciona el problema de POST!
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware global de ejemplo
app.use((request, response, next) => {
  console.log("Middleware");
  next();
});

// 📌 Importar rutas
const productosRoutes = require("./routes/productos.routes");

// 📌 Usar rutas
app.use("/productos", productosRoutes);

// 📌 Middleware final: Manejo de rutas no encontradas
app.use((request, response) => {
  response.status(404).send("<h1>Página no encontrada</h1>");
});

// Servidor en puerto 3000
app.listen(3000);
