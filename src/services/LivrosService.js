"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LivrosService = void 0;
const database_1 = __importDefault(require("../database"));
const Livro_1 = __importDefault(require("../entities/Livro"));
class LivrosService {
    constructor() {
        this.repo = database_1.default.getRepository(Livro_1.default);
    }
    async list() {
        return await this.repo.find();
    }
}
exports.LivrosService = LivrosService;
