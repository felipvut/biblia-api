import AppDataSource from "../database";
import Versiculo from "../entities/Versiculo";


export class VersiculosService {
    repo = AppDataSource.getRepository(Versiculo)

    async list() {
        return await this.repo.find()
    }
}