import request from 'supertest';
import { getConnection } from 'typeorm';
import  {app} from "../app";

import createConnection from '../database'; // Importando a função de conexões opostas

describe("Users", () => {

    beforeAll(async () => {
        const connection = await createConnection(); // Abrimos uma conexão com o a conexão oposta
        await connection.runMigrations(); // Fazemos isso para rodar as Migrations, caso precisar criar alguma tabela fezendo todo o fluxo normalmente
    });

    afterAll( async () => { // Ira dropar o database sempre que um teste for criados
        const connection = getConnection();
        await connection.dropDatabase();
        await connection.close();
    });

    it("Should be able to create a new survey", async () => {
        // Toda processamento ira retornar um response
        const response = await request(app).post("/surveys").send({ // Fazemos o request para POSTar(rota) e enviar (send) o title e description
            title: "Title Example",
            description: "Description Example"
        });

        expect(response.status).toBe(201); // Espera que o retorno da requisição seja 201
        expect(response.body).toHaveProperty("id"); // Ira verificar se no corpo do response tem uma propriedade chamada "id"
   
    });

    it("Should be able to get all surveys", async () => { // Método utilizando o GET
            
        await request(app).post("/surveys").send({ 
            title: "Title Example2",
            description: "Description Example2"
        });

        // Aqui estamos esperando com que o tamanho do {} se igual 2
        const response = await request(app).get("/surveys");
        expect(response.body.length).toBe(2);

    });

})