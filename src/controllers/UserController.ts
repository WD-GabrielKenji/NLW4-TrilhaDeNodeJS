import { Request, Response } from 'express'; // Fazendo os importes de Request e do Response para tipa-los dentro de create

class UserController{

    async create(request: Request, response: Response){
        const body = request.body; // Corpo da requisição
        console.log(body);
        return response.send();
    }

}

export { UserController }