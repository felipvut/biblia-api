"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LivrosController_1 = require("./controllers/LivrosController");
const TestamentosController_1 = require("./controllers/TestamentosController");
const VersoesController_1 = require("./controllers/VersoesController");
const VersiculosController_1 = require("./controllers/VersiculosController");
const routes = (0, express_1.Router)();
const controllers = {
    livros: {
        controller: new LivrosController_1.LivrosController()
    },
    testamentos: {
        controller: new TestamentosController_1.TestamentosController()
    },
    versoes: {
        controller: new VersoesController_1.VersoesController()
    },
    versiculos: {
        controller: new VersiculosController_1.VersiculosController()
    }
};
routes.get('/:obj', async (req, res) => {
    const { obj } = req.params;
    const controller = controllers[obj].controller;
    let result = await controller.list(req, res);
    res.send(result);
});
routes.get('/versiculos/:ver_vrs_id/:ver_liv_id/:ver_capitulo', async (req, res) => {
    const { ver_vrs_id, ver_liv_id, ver_capitulo } = req.params;
    const controller = controllers['versiculos'].controller;
    let result = await controller.getCap(ver_vrs_id, ver_liv_id, ver_capitulo);
    res.send(result);
});
exports.default = routes;
