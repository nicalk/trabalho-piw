import express from 'express';

import dados from "./dados"

import { engine } from 'express-handlebars';
import path from 'path';


const app = express();
const PORT = 8000;

app.set("view engine", "hbs");
app.engine("hbs", engine({
  extname: ".hbs"
}))

app.set("views", path.join(__dirname, "/views"));

app.get("/", function (req, res, next) {
  res.render("home", {
    showTitle: true,
  })
});
app.post("/", function (req, res, next) {
  res.render("home", {
    showTitle: true,
  })
});
app.put("/:id", function (req, res, next) {
  res.render("home", {
    showTitle: true,
  })
});
app.patch("/:id", function (req, res, next) {
  res.render("home", {
    showTitle: true,
  })
});
app.delete("/:id", function (req, res, next) {
  res.render("home", {
    showTitle: true,
  })
});

app.get("/usuarios", (req, res) => res.send(dados))
app.post("/usuarios", (req, res) => {
  let papel = req.body;
  let name = req.body;
  let age = req.body;
  let email = req.body;
  console.log(papel, name, age, email)
  res.status(201).json({ message: 'Usuário criado com sucesso!' });
})
app.put("/usuarios/:id", (req, res) => {
  let id = req.body.id
  let papel = req.body;
  let name = req.body;
  let age = req.body;
  let email = req.body;
  console.log(id, papel, name, age, email);
  res.status(200).json({ message: 'Usuário atualizado com sucesso!'});
})
app.delete("/usuarios/:id", (req, res) => {
  let id = req.body.id;
  res.status(200).json({ message: 'Usuário deletado com sucesso!'});
})

app.listen(PORT, () => {
  console.log(`[server]: Servidor rodando na porta https://localhost:${PORT}`);
});
