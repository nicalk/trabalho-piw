import express from 'express';

import { engine } from 'express-handlebars';
import path from 'path';

const app = express();
const PORT = 8000;

app.set("view engine", "hbs");
app.engine("hbs", engine({
  extname: ".hbs"
}))

app.set("views", path.join(__dirname, "/views"));

// app.get("/", (req, res) => res.send("Express + Typescript Server"));
// app.get("/user", (req, res) => res.send("Usuario"));

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

app.listen(PORT, () => {
  console.log(`[server]: Servidor rodando na porta https://localhost:${PORT}`);
});
