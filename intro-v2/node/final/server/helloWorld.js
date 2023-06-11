import http from "http";

const host = "localhost";
const port = 4000;

let server = http.createServer((request, response) => {
  response.end("<div>Hello World!</div>");
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
