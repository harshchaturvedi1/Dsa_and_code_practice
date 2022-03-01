const express = require("express");
const app = express();
// creting server using http
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
// const io = new Server(app);
// Error: You are trying to attach socket.io to an express request handler function. Please pass a http.Server instance.

app.get("/", (req, res) => {
  //   res.send("<h3>Hello World</h3>");
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    console.log("message", msg);
    socket.emit("recieved", "message recieved");
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log(`listening on port 3000`);
});
