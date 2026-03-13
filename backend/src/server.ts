const express = require("express");
const cors = require("cors");
const cursoRouter = require("./routes/curso");
const matriculaRouter = require("./routes/matricula");

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
  console.log(`Servidor rodando em http://localhost:3000`);
});