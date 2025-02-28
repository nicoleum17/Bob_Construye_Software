const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Para usar el motor de template engine EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Middleware para procesar JSON y formularios
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");

  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});

const plantasRoutes = require("./routes/plantas.routes");

app.use("/plantas", plantasRoutes);

//rutas
const productosRoutes = require("./routes/productos.routes");
app.use("/productos", productosRoutes);

//Rutas que estan mal
app.use((request, response) => {
  response.status(404).send("<h1>Página no encontrada</h1>");
});

app.listen(3000);
