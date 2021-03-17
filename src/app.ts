import "reflect-metadata"; // Importando o reflect-metadata
import express, { NextFunction, Request, Response } from 'express'; // Fazemos o importe do Express 
import "express-async-errors";
import createConnection from './database'; // Importando a função criada dentro do "index.ts"
import { router } from "./routes"; // importe do router
import { AppError } from "./errors/AppError";

createConnection(); // Executando a função definida dentro do "index.ts" no database
const app = express(); // Iniciamos a função do express

app.use(express.json());// Habilitando o trabalho com o formato JSON
app.use(router); // Passando a utilizar o router 

app.use(
    (err: Error, request: Request, response: Response, _next: NextFunction) => {// Se der sucesso dentro do middlewares
      if (err instanceof AppError) { // se a instancia for do tipo "AppError" do "UserController"
        return response.status(err.statusCode).json({
          message: err.message,
        });
      }

      // Para outros tipos de Errors
      return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`,
      });
    }
  );

export { app }