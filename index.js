const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hello World");
});

const lista = ["Mickey", "Donal", "Pateta"];

app.get("/personagens", function (req, res){
    res.send("Mickey, Donald and Pateta");
});

app.listen(3000);
