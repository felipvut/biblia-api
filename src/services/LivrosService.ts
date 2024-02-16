import AppDataSource from "../database";
import { Livro } from "../entities/Livro";


export class LivrosService {

    async list() {
        const repo = AppDataSource.getRepository(Livro)
        let value = await repo.find()
        console.log(value)
        return value
    }
}