"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersiculosController = void 0;
const VersiculosService_1 = require("../services/VersiculosService");
class VersiculosController {
    async list(request, response) {
        const service = new VersiculosService_1.VersiculosService();
        return await service.list();
    }
    async getCap(ver_vrs_id, ver_liv_id, ver_capitulo) {
        const service = new VersiculosService_1.VersiculosService();
        return await service.getCap(ver_vrs_id, ver_liv_id, ver_capitulo);
    }
}
exports.VersiculosController = VersiculosController;
