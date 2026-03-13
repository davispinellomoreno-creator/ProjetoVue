import { Router } from "express"

const router = Router()

const matriculas: any[] = []


router.post("/matricula", (req, res) => {

  console.log("Dados recebidos:", req.body)

  const { nome, email, cursoId } = req.body

  if (!nome || !email || !cursoId) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios"
    })
  }

  const novaMatricula = { nome, email, cursoId }

  matriculas.push(novaMatricula)

  res.status(201).json({
    mensagem: "Matrícula realizada com sucesso"
  })
})



router.get("/matriculas", (req, res) => {
  res.json(matriculas)
})

export default router