require("express-async-errors")
const database = require("./database/sqlite")
const AppError = require("./utils/AppError")

const express = require("express") 

const routes = require("./routes")

const app = express() 
app.use(express.json())

app.use(routes)

database()

app.use(( error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    } 

    console.error(error)

    return response.statusCode(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333 // Definiu a porta
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
// Escuta o endereço nessa porta x