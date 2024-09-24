
import express from 'express';
import bodyParser from "body-parser"
import { AppDataSource } from './data-source';
import cors from "cors"

import { User } from './entities/Post.entities';
import { Produto } from './entities/Produtos.entities';
import { Carrinho } from './entities/Carrinho.entities';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

AppDataSource.initialize()
.then(async() => {
    console.log("inicializado");

  app.get("/usuarios", async (req, res) => {
    try {
      const users = await AppDataSource.manager.find(User);
      console.log('Lista de usuários:', users);
      res.status(200).json(users);
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Erro ao listar usuários" })
    }
  })

    app.post("/usuarios", async(req, res) => {
      console.log(req.body)
      let {nome, email, idade, senha} = req.body;
    
      const newPost = new User();
      newPost.nome = nome;
      newPost.email = email;
      newPost.idade = idade;
      newPost.senha = senha;
    
      try{
        await AppDataSource.manager.save(newPost);
        res.send({"data": newPost})
        res.status(201).json({ message: 'Usuário criado com sucesso!' });
      }catch(e) {
        console.log('Erro ao criar usuario', e);
      }
      
      
    })

    app.put("/usuarios?:id", async (req, res) => {
      let {id, nome, email, idade, senha} = req.body;
      try {
      const user = await AppDataSource.manager.findOneBy(User, {id});
      if (user) {
        user.nome = nome || user.nome;
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

    app.delete("/usuarios?:id", async (req, res) => {
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


 app.get("/produtos", async (req, res) => {
      try {
        const produtos = await AppDataSource.manager.find(Produto);
        console.log('Lista de produtos:', produtos);
        res.status(200).json(produtos);
      } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Erro ao listar produtps" })
      }
    })
    
    app.post("/produtos", async(req, res) => {
      let {nome, valorAtual, valorAnterior} = req.body;
    
      const newPost = new Produto();
      newPost.nome = nome;
      newPost.valorAtual = valorAtual;
      newPost.valorAnterior = valorAnterior;
     
    
      try{
        await AppDataSource.manager.save(newPost);
        res.send({"data": newPost})
      }catch(e) {
        console.log('Erro ao criar produto', e);
      }
      
      
    })

    app.put("/produtos?:id", async (req, res) => {
      let {id, nome, valorAtual, valorAnterior} = req.body;
    
      const newPost = new Produto();
      newPost.nome = nome;
      newPost.valorAtual = valorAtual;
      newPost.valorAnterior = valorAnterior;
        try {
        const produto = await AppDataSource.manager.findOneBy(Produto, {id});
        if (produto) {
          produto.nome = nome || produto.nome;
          produto.valorAtual = valorAtual || produto.valorAtual;
          produto.valorAnterior = valorAnterior || produto.valorAnterior;
  
          await AppDataSource.manager.save(produto);
          res.status(200).json({message: "Produto atualizado com sucesso", data: produto});
        } else {
          res.status(404).json({message: "Produto não encontrado"});
        }
        }catch (e) {
          console.log(e);
          res.status(500).json({ message: 'Erro ao atualizar produto'});
        }
      })

      app.delete("/usuarios?:id", async (req, res) => {
          let id = req.body.id;
          try {
            const produto = await AppDataSource.manager.findOneBy(Produto, {id});
            if(produto) {
              await AppDataSource.manager.remove(produto);
              res.status(200).json({ message: "Produto deletado com sucesso" })
            } else {
              res.status(404).json({ message: 'Produto não encontrado'});
            }
          }catch (e) {
            console.error(e);
            res.status(500).json({message: "Erro ao deletar produto"})
          }
      })

      app.get("/produtos", async (req, res) => {
      try {
        const produtos = await AppDataSource.manager.find(Produto);
        console.log('Lista de produtos:', produtos);
        res.status(200).json(produtos);
      } catch (e) {
        console.log(e)
        res.status(500).json({ message: "Erro ao listar produtps" })
      }
    })
    
    app.post("/produtos", async(req, res) => {
      let {nome, valorAtual, valorAnterior} = req.body;
    
      const newPost = new Produto();
      newPost.nome = nome;
      newPost.valorAtual = valorAtual;
      newPost.valorAnterior = valorAnterior;
     
    
      try{
        await AppDataSource.manager.save(newPost);
        res.send({"data": newPost})
      }catch(e) {
        console.log('Erro ao criar produto', e);
      }
      
      
    })

    app.put("/produtos?:id", async (req, res) => {
      let {id, nome, valorAtual, valorAnterior} = req.body;
    
      const newPost = new Produto();
      newPost.nome = nome;
      newPost.valorAtual = valorAtual;
      newPost.valorAnterior = valorAnterior;
        try {
        const produto = await AppDataSource.manager.findOneBy(Produto, {id});
        if (produto) {
          produto.nome = nome || produto.nome;
          produto.valorAtual = valorAtual || produto.valorAtual;
          produto.valorAnterior = valorAnterior || produto.valorAnterior;
  
          await AppDataSource.manager.save(produto);
          res.status(200).json({message: "Produto atualizado com sucesso", data: produto});
        } else {
          res.status(404).json({message: "Produto não encontrado"});
        }
        }catch (e) {
          console.log(e);
          res.status(500).json({ message: 'Erro ao atualizar produto'});
        }
      })

      app.delete("/produtos?:id", async (req, res) => {
          let id = req.body.id;
          try {
            const produto = await AppDataSource.manager.findOneBy(Produto, {id});
            if(produto) {
              await AppDataSource.manager.remove(produto);
              res.status(200).json({ message: "Produto deletado com sucesso" })
            } else {
              res.status(404).json({ message: 'Produto não encontrado'});
            }
          }catch (e) {
            console.error(e);
            res.status(500).json({message: "Erro ao deletar produto"})
          }
      })

      app.get("/carrinho", async (req, res) => {
        try {
          const carrinho = await AppDataSource.manager.find(Carrinho);
          console.log('Lista de produtos no carrinho:', carrinho);
          res.status(200).json(carrinho);
        } catch (e) {
          console.log(e)
          res.status(500).json({ message: "Erro ao pegar produtos do carrinho" })
        }
      })

      app.post("/carrinho", async(req, res) => {
        let {nome, valorAtual, valorAnterior, quantidade} = req.body;
      
        const newPost = new Carrinho();
        newPost.nome = nome;
        newPost.valorAtual = valorAtual;
        newPost.valorAnterior = valorAnterior;
        newPost.quantidade = quantidade;
       
        try{
          await AppDataSource.manager.save(newPost);
          res.send({"data": newPost})
        }catch(e) {
          console.log('Erro ao colocar produto no carrinho', e);
        }
        
      })

      app.put("/carrinho?:id", async (req, res) => {
        let {id, nome, valorAtual, valorAnterior, quantidade} = req.body;
      
        const newPost = new Carrinho();
        newPost.nome = nome;
        newPost.valorAtual = valorAtual;
        newPost.valorAnterior = valorAnterior;
        newPost.quantidade = quantidade;
          try {
          const carrinho = await AppDataSource.manager.findOneBy(Carrinho, {id});
          if (carrinho) {
            carrinho.nome = nome || carrinho.nome;
            carrinho.valorAtual = valorAtual || carrinho.valorAtual;
            carrinho.valorAnterior = valorAnterior || carrinho.valorAnterior;
            carrinho.quantidade = quantidade || carrinho.quantidade;
    
            await AppDataSource.manager.save(carrinho);
            res.status(200).json({message: "Produto atualizado com sucesso", data: carrinho});
          } else {
            res.status(404).json({message: "Produto não encontrado"});
          }
          }catch (e) {
            console.log(e);
            res.status(500).json({ message: 'Erro ao atualizar produto'});
          }
        })

        app.delete("/carrinho?:id", async (req, res) => {
          let id = req.body.id;
          try {
            const carrinho = await AppDataSource.manager.findOneBy(Carrinho, {id});
            if(carrinho) {
              await AppDataSource.manager.remove(carrinho);
              res.status(200).json({ message: "Produto no carrinho deletado com sucesso" })
            } else {
              res.status(404).json({ message: 'Produto no carrinho não encontrado'});
            }
          }catch (e) {
            console.error(e);
            res.status(500).json({message: "Erro ao deletar produto do carrinho"})
          }
      })


    const users = await AppDataSource.manager.find(User);
    console.log('Lista de usuários:', users);
  
})
.catch((e) => console.log(e))

app.listen(PORT, () => {
      console.log(`[server]: Servidor rodando na porta https://localhost:${PORT}`);
    });
