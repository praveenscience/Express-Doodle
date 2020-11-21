const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use("/", express.static(__dirname + "/public"));

http.listen(3000, () => {
  console.log("Server started in Port 3000.");
});
