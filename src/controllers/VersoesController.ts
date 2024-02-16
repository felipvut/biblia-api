import { VersoesService } from "../services/VersoesService"


export class VersoesController {

    async list(request: any, response: any) {
        const service = new VersoesService()
        return await service.list()
    }
}