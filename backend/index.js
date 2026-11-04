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

/* const users = [
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
]; */

// Formato (Schema) dos dados do usuário no BD

const userSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    idade: { type: Number, required: true },
  },
  { timestamps: true },
);

// Usuário modelado ou formatado
// 'Usuario' é relacionado ao caminho do banco de dados isto é a tabela usuário

const Usuario = mongoose.model("Usuario", userSchema);

// Rota para buscar os usuários já cadastrados

app.get("/Usuarios", async (request, response) => {
  const usuariosDoBanco = await Usuario.find()
  response.json(usuariosDoBanco)
  console.log(usuariosDoBanco)

});

// Rota para criar usuário

app.post("/Usuarios", async (request, response) => {
   const usuarioCriado = await Usuario.create(request.body);
  console.log(usuarioCriado)
  response.json(usuarioCriado)
});

app.listen(port, () => {
  console.log(`
    <============================>
    Servidor rodando na porta ${port}
    <============================>
    `);
});
