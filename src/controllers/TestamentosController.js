"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestamentosController = void 0;
const TestamentosService_1 = require("../services/TestamentosService");
class TestamentosController {
    async list(request, response) {
        const service = new TestamentosService_1.TestamentosService();
        return await service.list();
    }
}
exports.TestamentosController = TestamentosController;
