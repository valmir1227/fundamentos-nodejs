const { response, request } = require("express");
const express = require("express");

const app = express();

app.get("/courses", (require, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

// Cria novo
app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});
// Atualiza
app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});
// Atualização Parcial
app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});
// Deleta
app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 4"]);
});

app.listen(3000);
