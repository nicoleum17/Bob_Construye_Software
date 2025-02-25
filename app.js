const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// El orden de los middleware importa
// De lo especifico a lo general
// app.get para solo peticiones de tipo GET
app.get("/plantas/agregar", (request, response, next) => {
  response.send("Página HTML");
});

app.post("/plantas/agregar", (request, response, next) => {
  console.log(request.body);
  response.send("Página HTML");
});

app.use((request, response, next) => {
  console.log("Otro middleware!");
  response.send("¡Hola mundo!"); //Manda la respuesta (return)
});

app.listen(3000);
