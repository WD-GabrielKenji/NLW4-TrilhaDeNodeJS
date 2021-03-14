import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveysController {
    async create(request: Request, response: Response){
    
        const { title, description } = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository); // Fazendo a chamada do Repository do Survey
    
        const survey = surveysRepository.create({ // Fazendo uma pesquisa no Repositorio
            title,
            description,
        })

        await surveysRepository.save(survey); // Salva no repository o OBJ pesquisado
        
        return response.status(201).json(survey) // Stats Code 201: É o status de criação
    }
}

export { SurveysController }