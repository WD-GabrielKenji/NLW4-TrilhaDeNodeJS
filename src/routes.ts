import { Router } from 'express'; // Importamos o Router para ter acesso a todos os métodos dele dentro do express
import { SurveysController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController(); // Instaciamos o controller de Users
const surveysController = new SurveysController(); // Instaciamos o controller de Surveys

router.post("/users", userController.create); // Definimos a rota (/users) com o Controller dos users chamando o método create
router.post("/surveys", surveysController.create); // Definimos a rota (/surveys) com o Controller dos surveys chamando o método create

export { router }