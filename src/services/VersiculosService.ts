import AppDataSource from "../database";
import Livro from "../entities/Livro";
import Versao from "../entities/Versao";
import Versiculo from "../entities/Versiculo";


export class VersiculosService {
    repo = AppDataSource.getRepository(Versiculo)
    repoLivro = AppDataSource.getRepository(Livro)

    async list() {
        return await this.repo.find()
    }

    async getVersicules(ver_vrs_id: any, liv_abreviado: any, ver_capitulo: any) {
        let livro = null
        if(liv_abreviado) {
            livro = await this.repoLivro.findBy({
                liv_abreviado: liv_abreviado
            })
        }
        let versicules = await this.repo.findBy({
            ver_vrs_id: ver_vrs_id,
            ver_liv_id: livro[0].liv_id,
            ver_capitulo: ver_capitulo
        })
        let result = {
            livro: livro[0].liv_nome,
            versicules: versicules
        }
        return result
    }

    async getCapitules(liv_abreviado: any) {
        let livro = null
        if(liv_abreviado) {
            livro = await this.repoLivro.findBy({
                liv_abreviado: liv_abreviado
            })
        }
        return await this.repo.query(`select distinct ver_capitulo from versiculos where ver_liv_id = '${livro[0].liv_id}';`)
    }
}