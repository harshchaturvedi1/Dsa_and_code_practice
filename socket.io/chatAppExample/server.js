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

let userCollections = [];

io.on("connection", (socket) => {
  // console.log("a user connected", socket.id);
  // console.log("socket ==>>", socket);

  // io.emit("user connected")

  socket.on("Joined and left", (name) => {
    // socket.broadcast.emit("new User Joined", msg);
    userCollections.push({ id: socket.id, user: name });
    io.emit("Joined and left", { typeOfMessage: "new-joined", userName: name });
  });

  socket.on("chat message", (msg) => {
    // console.log("message", msg);
    // socket.emit("recieved", "message recieved");
    // socket.broadcast.emit("chat message", msg);
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    // console.log("user disconnected", socket.id);
    // socket.broadcast.emit("new User Joined", msg);
    let exitedUser = "";
    for (item of userCollections) {
      if (item.id === socket.id) {
        exitedUser = item.user;
        break;
      }
    }
    io.emit("Joined and left", {
      typeOfMessage: "user-left",
      userName: exitedUser,
    });
  });
});

server.listen(4000, () => {
  console.log(`listening on port 4000`);
});
