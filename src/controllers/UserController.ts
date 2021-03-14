import { Request, Response } from 'express'; // Fazendo os importes de Request e do Response para tipa-los dentro de create
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

class UserController {

    async create(request: Request, response: Response){
        const {name, email} = request.body; // Corpo da requisição / Desestruturando o body e passando o name e email

        const usersRepository = getCustomRepository(UserRepository); // Repassando o Repository de User

        const userAlreadyExists = await usersRepository.findOne({ // Defininfo uma constante para, atraves do findOne() ira trazer somente 1 registro / Basicamente um select no email 
            email
        }) 

        if(userAlreadyExists){ // Se existir um usuario com o mesmo email
            return response.status(400).json({ // Devolvendo no response uma msg de error
                error: "User already exists!"
            })       
        }

        const user = usersRepository.create({ // Criando um OBJ de usuario com name e email somente, pois os outro serão passados automaticamente
            name,
            email
        })
          
        await usersRepository.save(user); // Ira salvar o user dentro do Repositorio

        return response.json(user);
    }
}

export { UserController };
