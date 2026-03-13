// routes/matricula.ts
import { Router, Request, Response } from "express";

const router = Router();

// Array tipado para armazenar matrículas
const matriculas: { nome: string; email: string; cursoId: number }[] = [];

// POST de matrícula
router.post("/matricula", (req: Request, res: Response) => {
  const { nome, email, cursoId } = req.body;

  if (!nome || !email || !cursoId) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const novaMatricula = { nome, email, cursoId };
  matriculas.push(novaMatricula);

  return res.status(201).json({
    mensagem: "Matrícula realizada com sucesso",
    matricula: novaMatricula
  });
});

// GET de todas as matrículas
router.get("/matriculas", (req: Request, res: Response) => {
  res.json(matriculas);
});

// Export default para ES Modules
export default router;