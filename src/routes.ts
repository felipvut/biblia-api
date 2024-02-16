import { Router } from "express";
import { LivrosController } from "./controllers/LivrosController";

const routes = Router()

routes.get('/livros', (req, res) => {
    const controller = new LivrosController()
    let result = controller.list(req, res)
    res.status(200).json(JSON.stringify(result))
})

export default routes;