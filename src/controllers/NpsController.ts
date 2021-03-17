import { Request, Response } from "express";
import { getCustomRepository, IsNull, Not } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class NpsController{

    async execute(request: Request, response: Response) {

        const { survey_id } = request.params; // Recebendo o id da pesquisa

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveysUsers = await surveysUsersRepository.find({ // Trazendo todas as resposta contidas
            survey_id,
            value: Not(IsNull()), 
        }); // Not(IsNull()) - fara com q não peguei os surveys nulos

        // Processo de filtragem pro NPS detratores (detractor), passivos () e promotores (promoters):
        const detractor = surveysUsers.filter(
            (survey) => survey.value >= 0 && survey.value <= 6 
        ).length;

        const promoters = surveysUsers.filter(
            (survey) => survey.value >= 9 && survey.value <= 10 
        ).length;

        const passive = surveysUsers.filter(
            (survey) => survey.value >= 7 && survey.value <= 8 
        ).length;
        
        const totalAnswers = surveysUsers.length; // Passando a quantidade de resposta

        // Calculo do NPS
        const calculate = Number((((promoters - detractor) / totalAnswers) * 100).toFixed(2));

        return response.json({
            detractor,
            passive,
            promoters,
            totalAnswers,
            nps: calculate
        });

    }
}

export { NpsController }