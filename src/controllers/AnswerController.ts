import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
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
            return response.status(400).json({
                error: "Survey User does not exists!"
            });
        }

        surveyUser.value = Number(value); // Se for ira pegar o "id" e alterar o "value"

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController };