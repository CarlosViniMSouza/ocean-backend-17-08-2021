const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

const lista = ["Mickey", "Donald", "Pateta"];

app.get("/personagens", function (req, res) {
  res.send(lista);
});

app.get("/personagens/:id", function (req, res) {
  const id = req.params.id - 1;
  const item = lista[id];
  res.send(item);
});

app.listen(3000);
