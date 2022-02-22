const { response, request } = require("express");
const express = require("express");

const app = express();

// Middleware

app.use(express.json());

app.get("/courses", (require, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

// Cria novo
app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
});
// Atualiza
app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(params);
});
// Atualização Parcial
app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});
// Deleta
app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3000);
