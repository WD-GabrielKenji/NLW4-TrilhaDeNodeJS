import "reflect-metadata"; // Importando o reflect-metadata
import express from 'express'; // Fazemos o importe do Express 
import createConnection from './database'; // Importando a função criada dentro do "index.ts"
import { router } from "./routes"; // importe do router

createConnection(); // Executando a função definida dentro do "index.ts" no database
const app = express(); // Iniciamos a função do express

app.use(express.json());// Habilitando o trabalho com o formato JSON
app.use(router); // Passando a utilizar o router 

export { app }