import express, { request, response } from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000;

const users = [
  {
    nome: "sandra",
    curso: "Informática",
    sala: 20,
  },
];
app.use(express.json());

// Rota para buscar os usuários já cadastrados

app.get("/Usuarios", (request, response) => {
  response.json(users);
});

app.listen(port, () => {
  console.log(`
    <============================>
    Servidor rodando na porta ${port}
    <============================>
    `);
});
