// HTTP (Hyper Text Transfer Protocol)

const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello world!</h1>');
});

const port = 8000;
server.listen(
  port,
  () => console.log("Server is running!")
)

