import express, { request, response } from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
const port = 3000;

// conexão com o banco de dados Mongoose

mongoose
  .connect("mongodb://localhost:27017/Usuarios")
  .then(() => {
    console.log("A conexão com o banco de dados mongoose foi um sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao conectar com o MongoDB");
  });

const users = [
  {
    nome: "sandra",
    curso: "Informática",
    sala: 20,
  },

  {
    nome: "João",
    curso: "Informática",
    sala: "18",
  },
];

const userSchema = new mongoose.Schema(
  {
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    idade: {type: Number, required: true}
  }, {timestamps: true}
)
// Rota para buscar os usuários já cadastrados

app.get("/Usuarios", (request, response) => {
  response.json(users);
});

// Rota para criar usuário

app.post("/Usuarios", (request, response) => {
  console.log(request.body)
  users.push(request.body)
  response.json(users)
});

app.listen(port, () => {
  console.log(`
    <============================>
    Servidor rodando na porta ${port}
    <============================>
    `);
});
