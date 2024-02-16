import AppDataSource from "../database";
import Versiculo from "../entities/Versiculo";


export class VersiculosService {
    repo = AppDataSource.getRepository(Versiculo)

    async list() {
        return await this.repo.find()
    }

    async getCap(ver_vrs_id: any, ver_liv_id: any, ver_capitulo: any) {
        return await this.repo.findBy({
            ver_vrs_id: ver_vrs_id,
            ver_liv_id: ver_liv_id,
            ver_capitulo: ver_capitulo
        })
    }
}