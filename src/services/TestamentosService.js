"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestamentosService = void 0;
const database_1 = __importDefault(require("../database"));
const Testamento_1 = __importDefault(require("../entities/Testamento"));
class TestamentosService {
    constructor() {
        this.repo = database_1.default.getRepository(Testamento_1.default);
    }
    async list() {
        return await this.repo.find();
    }
}
exports.TestamentosService = TestamentosService;
