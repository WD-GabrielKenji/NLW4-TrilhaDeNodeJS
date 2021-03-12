import 'reflect-metadata' // Importando o reflect-metadata
import express from 'express'; // Fazemos o importe do Express 
import './database'; // Importando o database para o arquivo index.ts seja iniciado apos o servidor/aplicação ser iniciado tbm
import { router } from './routes'; // importe do router

const app = express(); // Iniciamos a função do express

app.use(express.json())// Habilitando o trabalho com o formato JSON
app.use(router) // Passando a utilizar o router 

app.listen(3333, () => console.log("Server is running!")) // "listen" para criar o servidor e passamos ('porta', "uma msg só para ver se esta funcionando o servidor")