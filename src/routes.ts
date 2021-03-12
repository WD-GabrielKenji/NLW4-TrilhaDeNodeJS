import { Router } from 'express'; // Importamos o Router para ter acesso a todos os métodos dele dentro do express
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController(); // Instaciamos o controller 

router.post("/users", userController.create); // Definimos a rota (/users) com o Controller dos users chamando o método create

export { router }