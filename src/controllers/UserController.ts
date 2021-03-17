import { Request, Response } from 'express'; // Fazendo os importes de Request e do Response para tipa-los dentro de create
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';
import * as yup from 'yup';

class UserController {

    async create(request: Request, response: Response){
        const {name, email} = request.body; // Corpo da requisição / Desestruturando o body e passando o name e email
        
        // Shape da validação
        const schema = yup.object().shape({  // passamos o formato: OBJ e definimos o shape
            name: yup.string().required(), // Sera um OBJ do tipo string e obrigatorio
            email: yup.string().email().required() // Sera um OBJ do tipo Email e sera obrigatorio
        })

        // Validação do shape *Existem duas formas!*
        /*
        if(!(await schema.isValid(request.body))){ // Fazendo a validação do schema caso não for valido as informações do "request.body"
            //return response.status(400).json({ error: "Validation Failed!" })
        }
        */
        try{
            await schema.validate(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err});
        }


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

        return response.status(201).json(user);
    }
}

export { UserController };
