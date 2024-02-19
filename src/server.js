"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./database/index");
const index_1 = __importDefault(require("./database/index"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = 3000;
index_1.default.initialize().then(() => {
    app.listen(port, () => {
        console.log("Server is running in port " + port);
    });
}).catch((e) => {
    console.log(e);
});
app.use((0, cors_1.default)());
app.use(routes_1.default);
