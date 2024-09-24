import { DataSource } from "typeorm";
import { User } from "./entities/Post.entities";
import { Produto } from "./entities/Produtos.entities";
import { Carrinho } from "./entities/Carrinho.entities";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./main.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Produto, Carrinho],
    subscribers: [],
    migrations: [],
})