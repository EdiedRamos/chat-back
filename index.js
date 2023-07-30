const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Chat back");
  res.end();
});

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("alguien se ha conectado");

  socket.on("message", (data) => io.emit("message", data));
});

server.listen(3000, () => console.log("Server encendido en el puerto 3000"));
