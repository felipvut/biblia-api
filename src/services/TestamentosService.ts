import AppDataSource from "../database";
import Testamento from "../entities/Testamento";


export class TestamentosService {
    repo = AppDataSource.getRepository(Testamento)

    async list() {
        return await this.repo.find()
    }
}