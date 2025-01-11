const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/aboutus", (req, res) => {
  res.send("Hello Express! about us page");
});

app.listen(8000, () => {
  console.log("Listening to port 8000");
});
