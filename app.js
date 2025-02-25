const express = require("express");
const app = express();

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// El orden de los middleware importa
// De lo especifico a lo general
// app.get para solo peticiones de tipo GET
app.get("/plantas/agregar", (request, response, next) => {
  response.send(html_header, html_form, html_footer);
});

app.post("/plantas/agregar", (request, response, next) => {
  response.send(html_header, html_form, html_footer);
});

app.use((request, response, next) => {
  console.log("Otro middleware!");
  response.send("¡Hola mundo!"); //Manda la respuesta (return)
});

app.listen(3000);
