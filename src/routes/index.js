// Esse arquivo é responsável por reunir todas as rotas

const { Router } = require("express")

const usersRoutes = require("./users.routes")

const routes = Router()

routes.use("/users", usersRoutes)

module.exports = routes