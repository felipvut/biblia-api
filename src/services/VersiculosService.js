"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersiculosService = void 0;
const database_1 = __importDefault(require("../database"));
const Versiculo_1 = __importDefault(require("../entities/Versiculo"));
class VersiculosService {
    constructor() {
        this.repo = database_1.default.getRepository(Versiculo_1.default);
    }
    async list() {
        return await this.repo.find();
    }
    async getCap(ver_vrs_id, ver_liv_id, ver_capitulo) {
        return await this.repo.findBy({
            ver_vrs_id: ver_vrs_id,
            ver_liv_id: ver_liv_id,
            ver_capitulo: ver_capitulo
        });
    }
}
exports.VersiculosService = VersiculosService;
