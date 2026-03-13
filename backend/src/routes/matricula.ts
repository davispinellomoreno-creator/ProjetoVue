const { Router } = require("express");

import type { Request, Response } from "express";

const router = Router();

const matriculas: { nome: string; email: string; cursoId: number }[] = [];


router.post("/matricula", (req: Request, res: Response) => {
  const { nome, email, cursoId } = req.body;

  console.log("Dados recebidos:", req.body);

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


router.get("/matriculas", (req: Request, res: Response) => {
  res.json(matriculas); // array correto
});

module.exports = router;