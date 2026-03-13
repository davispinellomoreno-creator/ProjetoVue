import express from "express";
import cors from "cors";

import cursoRouter from "./routes/curso.js";
import matriculaRouter from "./routes/matricula.js";

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use(cursoRouter);
app.use(matriculaRouter);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});