import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import SendMailService from "../services/SendMailService";
import { resolve } from 'path'; // Para conseguir fazer a leitura do caminho dos arquivos


class SendMailController {
    
    async execute(request: Request, response: Response) { // Utilizado o método Execute 
        const { email, survey_id } = request.body;

        //Pegando os repositorys necessarios
        const userRepository = getCustomRepository(UserRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        // Pegando os dados de email do Rep de User
        const user = await userRepository.findOne({email});

        // Fazendo a verificação se o usuario não(!) existir:
        if(!user) { 
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

        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs") // Variavel do Path (mapeador) / "(__dirname)" ira pegar o diretorio exato da aplicação / (".."(volta dois diretorios), define os diretorios até o arquivo ) Passamo o caminho até o arquivo 

        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({ // Faz a verificação para duas condições, utilizando o where
            where: { user_id: user.id, value: null }, // SELECT com Condição AND / Se existir o usuario, mas o valor da pesquisa for nulo
            relations: ["user", "survey"],
        });

        const variables = { // Variaveis necessarias para o envio do e-mail
            name: user.name,
            title: survey.title,
            description: survey.description,
            id: "",
            link: process.env.URL_MAIL // Variavel de URL do ".env"
        }

        if(surveyUserAlreadyExists){
            variables.id = surveyUserAlreadyExists.id; // Se existir o surveyUser
            await SendMailService.execute(email, survey.title, variables, npsPath);
            return response.json(surveyUserAlreadyExists);
        }

        // Salvar as informações na tabela surveyUser
        const surveyUser = surveysUsersRepository.create({ 
            user_id: user.id,
            survey_id 
        });

        await surveysUsersRepository.save(surveyUser); // Se tudo der certo
        // Enviar e-mail para o usuario
        variables.id = surveyUser.id; // Se não existir um surveyUser, dará o id
        await SendMailService.execute(email, survey.title, variables, npsPath) // Funçao para executar o service

        return response.json(surveyUser);

    }
}

export { SendMailController }