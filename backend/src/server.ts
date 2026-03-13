import express from "express"
import cors from "cors"

import cursosRoutes from "./routes/curso.js"
import matriculaRoutes from "./routes/matricula.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use(cursosRoutes)
app.use(matriculaRoutes)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})