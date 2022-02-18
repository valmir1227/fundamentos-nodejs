const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", (require, response) => {
  return response.json({ message: "Olá NodeJs" });
});

app.listen(3000);
