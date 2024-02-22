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

    async getCapitules(liv_id: any) {
        if(liv_id.length > 3) {
            return
        }
        return await this.repo.query(`select distinct ver_capitulo from versiculos where ver_liv_id = '${liv_id}';`)
    }
}