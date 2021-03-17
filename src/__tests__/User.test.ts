import request from 'supertest';
import { getConnection } from 'typeorm';
import { app } from "../app";
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

    it("Should be able to create a new user", async () => {
        // Toda processamento ira retornar um response
        const response = await request(app).post("/users").send({ // Fazemos o request para POSTar(rota) e enviar (send) o email e name
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(201); // Espera que o retorno da requisição seja 201
    });

    it("Should be able to create a new user with exists email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(400);
    });

})