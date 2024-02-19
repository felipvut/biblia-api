"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Testamento_1 = __importDefault(require("../entities/Testamento"));
const Versao_1 = __importDefault(require("../entities/Versao"));
const Versiculo_1 = __importDefault(require("../entities/Versiculo"));
const Livro_1 = __importDefault(require("../entities/Livro"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [Livro_1.default, Versiculo_1.default, Versao_1.default, Testamento_1.default],
    synchronize: false,
    logging: true,
});
exports.default = AppDataSource;
