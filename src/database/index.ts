import { DataSource } from "typeorm";
import Testamento from "../entities/Testamento";
import Versao from "../entities/Versao";
import Versiculo from "../entities/Versiculo";
import Livro from "../entities/Livro";
import dotenv from "dotenv";
dotenv.config()

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Livro, Versiculo, Versao, Testamento],
    synchronize: false,
    ssl: true,
    url: process.env.URL,
    logging: true,
})

export default AppDataSource
