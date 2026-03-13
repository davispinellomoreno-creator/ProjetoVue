import { Router } from "express"

const router = Router()

router.post("/matricula", (req, res) => {

  console.log("Dados recebidos:", req.body)

  const { nome, email, cursoId } = req.body

  if (!nome || !email || !cursoId) {
    return res.status(400).json({
      erro: "Todos os campos são obrigatórios"
    })
  }

  res.status(201).json({
    mensagem: "Matrícula realizada com sucesso"
  })

})

export default router