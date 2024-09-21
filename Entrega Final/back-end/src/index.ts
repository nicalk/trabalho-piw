
import express from 'express';
import bodyParser from "body-parser"
import { AppDataSource } from './data-source';

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

app.get("/usuarios", async (req, res) => {
  try {
    const users = await AppDataSource.manager.find(User);
    res.status(200).json(users);
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: "Erro ao listar usuários" })
  }
})
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
app.put("/usuarios/:id", async (req, res) => {
  let {id, papel, nome, email, idade, senha} = req.body;
  try {
    const user = await AppDataSource.manager.findOneBy(User, {id});
    if (user) {
      user.nome = nome || user.nome;
      user.papel = papel || user.papel;
      user.email = email || user.email;
      user.idade = idade || user.idade;
      user.senha = senha || user.senha;

      await AppDataSource.manager.save(user);
      res.status(200).json({message: "Usuario atualizado com sucesso", data: user});
    } else {
      res.status(404).json({message: "Usuário não encontrado"});
    }
  }catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Erro ao atualizar usuário'});
  }
})
app.delete("/usuarios/:id", async (req, res) => {
  let id = req.body.id;
  try {
    const user = await AppDataSource.manager.findOneBy(User, {id});
    if(user) {
      await AppDataSource.manager.remove(user);
      res.status(200).json({ message: "Usuário deletado com sucesso" })
    } else {
      res.status(404).json({ message: 'Usuário não encontrado'});
    }
  }catch (e) {
    console.error(e);
    res.status(500).json({message: "Erro ao deletar usuário"})
  }
})

app.listen(PORT, () => {
  console.log(`[server]: Servidor rodando na porta https://localhost:${PORT}`);
});
