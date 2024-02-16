import AppDataSource from "../database";
import Livro from "../entities/Livro";


export class LivrosService {
    repo = AppDataSource.getRepository(Livro)

    async list() {
        return await this.repo.find()
    }
}