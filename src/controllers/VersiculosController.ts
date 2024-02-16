import { VersiculosService } from "../services/VersiculosService"


export class VersiculosController {

    async list(request: any, response: any) {
        const service = new VersiculosService()
        return await service.list()
    }
}