const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use("/", express.static(__dirname + "/public"));

const onConnection = socket => {
  socket.on("drawing", data => socket.broadcast.emit("drawing", data));
};

io.on("connection", onConnection);

http.listen(3000, () => {
  console.log("Server started in Port 3000.");
});
