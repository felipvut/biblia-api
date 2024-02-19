"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersoesService = void 0;
const database_1 = __importDefault(require("../database"));
const Versao_1 = __importDefault(require("../entities/Versao"));
class VersoesService {
    constructor() {
        this.repo = database_1.default.getRepository(Versao_1.default);
    }
    async list() {
        return await this.repo.find();
    }
}
exports.VersoesService = VersoesService;
