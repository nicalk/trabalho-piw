import { DataSource } from "typeorm";
import { User } from "./entities/Post.entities";

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    // host: "localhost",
    // port: 5432,
    // username: "teste",
    // password: "teste",
    database: "./main.sqlite",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
.then(() => {
    console.log("inicializado");
})
.catch((e) => console.log(e))