import { Router } from "express"

const router = Router()

router.get("/cursos", (req, res) => {

  const cursos = [
    { id: 1, nome: "JavaScript Básico" },
    { id: 2, nome: "Node.js Fundamental" },
    { id: 3, nome: "Vue.js Iniciante" }
  ]

  res.json(cursos)

})

export default router