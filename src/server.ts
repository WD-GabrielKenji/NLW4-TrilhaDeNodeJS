import 'reflect-metadata' // Importando o reflect-metadata
import express from 'express'; // Fazemos o importe do Express 
import './database'; // Importando o database para o arquivo index.ts seja iniciado apos o servidor/aplicação ser iniciado tbm

const app = express(); // Iniciamos a função do express

app.get("/", (request, response) => {
    // return response.send("Hello World - NLW4") <- Enviando uma msg 
    return response.json({message: "Hello World - NLW04"}) // Apresenta um json como o response para a request 
}) // Método get, faz a busca na rota "/" -> http://localhost:3333/ / Recebendo tbm um request-response

/* 
    Sempre sera esse parametro:
    1 param = Rota(Recurso API)
    2 param = request, response
*/

app.post("/", (request, response) => {
    // Recebeu os dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is running!")) // "listen" para criar o servidor e passamos ('porta', "uma msg só para ver se esta funcionando o servidor")