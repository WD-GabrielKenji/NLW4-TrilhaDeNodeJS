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

    async show(request: Request, response: Response){ // Método que ira listar todas as pesquisas
        const surveysRepository = getCustomRepository(SurveysRepository); // Passando o repository 

        const all = await surveysRepository.find(); // find é método utilizado para listar todos os registros numa tabela

        return response.json(all); 
    }

}

export { SurveysController }