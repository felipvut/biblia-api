import AppDataSource from "../database";
import Versao from "../entities/Versao";


export class VersoesService {
    repo = AppDataSource.getRepository(Versao)

    async list() {
        return await this.repo.find()
    }
}