import express, { request, response } from "express";
import mongoose from "mongoose";
const app = express();
const port = 3000
app.use(express.json());

app.post("/Usuarios", (request, response) => {

});
app.listen(port, () => {
  console.log(`
    <============================>
    Servidor rodando na porta ${port}
    <============================>
    `);
});
