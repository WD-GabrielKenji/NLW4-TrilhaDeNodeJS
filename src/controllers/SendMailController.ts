import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import SendMailService from "../services/SendMailService";

class SendMailController {
    
    async execute(request: Request, response: Response) { // Utilizado o método Execute 
        const { email, survey_id } = request.body;

        //Pegando os repositorys necessarios
        const userRepository = getCustomRepository(UserRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        // Pegando os dados de email do Rep de User
        const userAlreadyExists = await userRepository.findOne({email});

        // Fazendo a verificação se o usuario não(!) existir:
        if(!userAlreadyExists) { 
            return response.status(400).json({
                error: "User does not exists",
            });
        }

        // Pegando a informação do id
        const survey = await surveysRepository.findOne({id: survey_id});

        // Fazendo a verificação se o survey não(!) existir:
        if(!survey){
            return response.status(400).json({
                error: "Survey does not exists",
            });
        }

        // Salvar as informações na tabela surveyUser
        const surveyUser = surveysUsersRepository.create({ 
            user_id: userAlreadyExists.id,
            survey_id 
        });

        await surveysUsersRepository.save(surveyUser); // Se tudo der certo

        // Enviar e-mail para o usuario
        await SendMailService.execute(email, survey.title, survey.description) // Funçao para executar o service

        return response.json(surveyUser);

    }
}

export { SendMailController }