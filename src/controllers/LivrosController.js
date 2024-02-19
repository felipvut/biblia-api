"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosController = void 0;
const LivrosService_1 = require("../services/LivrosService");
class LivrosController {
    async list(request, response) {
        const service = new LivrosService_1.LivrosService();
        return await service.list();
    }
}
exports.LivrosController = LivrosController;
