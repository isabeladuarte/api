// Rotas do usuário

const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

function myMiddleware(request, response, next) {
    console.log("Passou pelo middleware")
    
    if(!request.body.isAdmin) {
        return response.json({ message: "user anauthorized" })
    }

    next()
}

const usersController = new UsersController()

usersRoutes.post("/", myMiddleware, usersController.create)

module.exports = usersRoutes()