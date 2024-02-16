import { Router } from "express";
import { LivrosController } from "./controllers/LivrosController";
import { TestamentosController } from "./controllers/TestamentosController";
import { VersoesController } from "./controllers/VersoesController";
import { VersiculosController } from "./controllers/VersiculosController";

const routes = Router()

const controllers = {
    livros: {
        controller: new LivrosController()
    },
    testamentos: {
        controller: new TestamentosController()
    },
    versoes: {
        controller: new VersoesController()
    },
    versiculos: {
        controller: new VersiculosController()
    }
}

routes.get('/:obj', async (req, res) => {
    const { obj } = req.params
    const controller = controllers[obj].controller
    let result = await controller.list(req, res)
    res.send(result)
})

routes.get('/versiculos/:ver_vrs_id/:ver_liv_id/:ver_capitulo', async (req, res) => {
    const { ver_vrs_id, ver_liv_id, ver_capitulo } = req.params
    const controller = controllers['versiculos'].controller
    let result = await controller.getCap(ver_vrs_id, ver_liv_id, ver_capitulo)
    res.send(result)
})

export default routes;