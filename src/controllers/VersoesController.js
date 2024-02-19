"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersoesController = void 0;
const VersoesService_1 = require("../services/VersoesService");
class VersoesController {
    async list(request, response) {
        const service = new VersoesService_1.VersoesService();
        return await service.list();
    }
}
exports.VersoesController = VersoesController;
