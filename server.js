const express = require("express");
const app = express();
// https://youtu.be/1NrHkjlWVhM?t=237

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen("5000");
