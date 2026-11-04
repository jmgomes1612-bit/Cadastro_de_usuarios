import express, { request, response } from 'express';
const app = express();
const port = 3000;

const users = [
  {
    nome: "sandra",
    curso: "Informática",
    sala: 20
  },
  
  {
    nome: "João",
    curos: "Informática",
    idade: "18"
  }
];
app.use(express.json());

// Rota para buscar os usuários já cadastrados

app.get('/Usuarios', (request, response) => {
  response.json(users);
});

// Rota para criar usuário

app.post('/Usuarios', (request, response) => {
    users.push(request.body)
})


app.listen(port, () => {
  console.log(`
    <============================>
    Servidor rodando na porta ${port}
    <============================>
    `);
});
