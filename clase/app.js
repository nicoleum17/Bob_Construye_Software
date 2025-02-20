// Modulo del sistema de archivos (files system)
const file_system = require("fs");

// Código asincrónico, se ejecuta mientras el sistema hace otra
// Esta es sincrónica, bloquea todo hasta que
file_system.writeFileSync("hola.txt", "Hola desde node");

// Asyncronous sort
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
  //Los imprime ordenados debido a que los imprime en función de su valor
  setTimeout(() => {
    console.log(item);
  }, item);
}

// Programar servidor remoto
const http = require("http");

const server = http.createServer((request, response) => {
  // console.log(request.url);
  // response.setHeader("Content-Type", "text/html");
  // response.write("");
  // response.end();
}); //localhost:3000

server.listen(3000);
