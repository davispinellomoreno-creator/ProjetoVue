import { Router, Request, Response } from "express";

const router = Router();

const cursos = [
  { id: 1, nome: "JavaScript Básico" },
  { id: 2, nome: "Node.js Fundamental" },
  { id: 3, nome: "Vue.js Iniciante" }
];

router.get("/cursos", (req: Request, res: Response) => {
  res.json(cursos);
});

export default router;