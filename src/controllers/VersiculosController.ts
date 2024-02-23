import { VersiculosService } from "../services/VersiculosService"


export class VersiculosController {

    async list(request: any, response: any) {
        const service = new VersiculosService()
        return await service.list()
    }

    async getVersicules(ver_vrs_id: any, liv_abreviado: any, ver_capitulo: any) {
        const service = new VersiculosService()
        return await service.getVersicules(ver_vrs_id, liv_abreviado, ver_capitulo )
    }

    async getCapitules(liv_abreviado: any) {
        const service = new VersiculosService()
        return await service.getCapitules(liv_abreviado)
    }
}