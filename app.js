const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const session = require("express-session");

app.use(
  session({
    secret:
      "mi string secreto que debe ser un string aleatorio muy largo, no como éste",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

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

const usersRoutes = require("./routes/users.routes");
app.use("/users", usersRoutes);

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
