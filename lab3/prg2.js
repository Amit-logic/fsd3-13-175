import http from "http";

const server = http.createServer((req, res) => {
  res.write("<h1>Hello Client</h1>");
  res.write("<h2>Amit Singh</h2>");
  res.end(" <h3>Bye Bye</h3>");
});

server.listen(4444, () => console.log("server is running at 4444.... "));
