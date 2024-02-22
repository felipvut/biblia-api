import { LivrosService } from "../services/LivrosService"


export class LivrosController {

    async list(request: any, response: any) {
        const service = new LivrosService()
        return await service.list()
    }

}