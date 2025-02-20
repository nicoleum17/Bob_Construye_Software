// Modulo del sistema de archivos (files system)
const file_system = require("fs");

// Código asincrónico, se ejecuta mientras el sistema hace otra
file_system.writeFileSync("hola.txt", "Hola desde node");
