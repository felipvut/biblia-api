import { VersiculosService } from "../services/VersiculosService"


export class VersiculosController {

    async list(request: any, response: any) {
        const service = new VersiculosService()
        return await service.list()
    }

    async getCap(ver_vrs_id: any, ver_liv_id: any, ver_capitulo: any) {
        const service = new VersiculosService()
        return await service.getCap(ver_vrs_id, ver_liv_id, ver_capitulo )
    }
}