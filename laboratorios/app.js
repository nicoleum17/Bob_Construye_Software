const html_header = "";
const html_form = "";
const html_footer = "";

const http = require("http");
const server = http.createServer((request, response) => {
  if (
    request.method == "GET" &&
    (request.url == "/agregar" || request.url == "/")
  ) {
  }
});
server.listen(3000);
