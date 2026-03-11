import express from "express"

const app = express()
app.use(express.json())
app.get("/cursos", (req, res) => {
  const cursos = [
    { id: 1, nome: "JavaScript Básico" },
    { id: 2, nome: "Node.js Fundamental" },
    { id: 3, nome: "Vue.js Iniciante" }
  ]

  res.json(cursos)
})