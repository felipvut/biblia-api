import { TestamentosService } from "../services/TestamentosService"


export class TestamentosController {

    async list(request: any, response: any) {
        const service = new TestamentosService()
        return await service.list()
    }
}