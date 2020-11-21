const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("Hello, Everyone!");
});

app.listen(3000, () => {
  console.log("Server started in Port 3000.");
});
