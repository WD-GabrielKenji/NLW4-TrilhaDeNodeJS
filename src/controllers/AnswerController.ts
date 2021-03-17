import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

    async execute(request: Request, response: Response) {
        // Pegando os parametros vindo da rota
        const { value } = request.params; // Pegando o "value" de dentro do request.params
        const { u } = request.query; // Pegando o "u" de dentro do request.query

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository); // Chamando o Repository de surveysUsers
        
        // Verificando se o id é valido
        const surveyUser = await surveysUsersRepository.findOne({ 
            id: String(u), 
        });

        if (!surveyUser) { // Se não existir 
            throw new AppError("Survey User does not exists!") // Sempre quanto tivermos um erro, ela ira criar uma exceção para cima (Jogando a exceção para o Controller -> routes.ts -> app.ts) até chegar no local que queremos tratar
        }

        surveyUser.value = Number(value); // Se for ira pegar o "id" e alterar o "value"

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController };