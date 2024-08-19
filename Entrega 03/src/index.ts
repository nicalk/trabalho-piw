
import express from 'express';
import bodyParser from "body-parser"
import { AppDataSource } from './data-source';

import dados from "./dados"

import { engine } from 'express-handlebars';
import path from 'path';
import { User } from './entities/Post.entities';


const app = express();
const PORT = 8000;
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.set("view engine", "hbs");
app.engine("hbs", engine({
  extname: ".hbs"
}))

app.set("views", path.join(__dirname, "/views"));

// app.get("/usuarios", (req, res) => res.send(dados))
app.post("/usuarios", async(req, res) => {
  let {id, papel, nome, email, idade, senha} = req.body;

  const newPost = new User();
  newPost.nome = nome;
  newPost.email = email;
  newPost.papel = papel;
  newPost.idade = idade;
  newPost.senha = senha;
  newPost.id = id;

  try{
    await AppDataSource.manager.save(newPost);
    res.send({"status": "status", "data": newPost})
  }catch(e) {
    console.log(e);
  }
  
  res.status(201).json({ message: 'Usuário criado com sucesso!' });
})
// app.put("/usuarios/:id", (req, res) => {
//   let id = req.body.id
//   let papel = req.body;
//   let name = req.body;
//   let age = req.body;
//   let email = req.body;
//   console.log(id, papel, name, age, email);
//   res.status(200).json({ message: 'Usuário atualizado com sucesso!'});
// })
// app.delete("/usuarios/:id", (req, res) => {
//   let id = req.body.id;
//   res.status(200).json({ message: 'Usuário deletado com sucesso!'});
// })

app.listen(PORT, () => {
  console.log(`[server]: Servidor rodando na porta https://localhost:${PORT}`);
});
