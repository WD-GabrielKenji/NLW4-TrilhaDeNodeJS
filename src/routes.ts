import { Router } from 'express'; // Importamos o Router para ter acesso a todos os métodos dele dentro do express
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveyController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController(); // Instaciamos o controller de Users
const surveysController = new SurveysController(); // Instaciamos o controller de Surveys
const sendMailController = new SendMailController(); // Instanciamos o controller de SendMailController
const answerController = new AnswerController(); // Instanciamos o controller de AnswerController
const npsController = new NpsController();

router.post("/users", userController.create); // Definimos a rota (/users) com o Controller dos users chamando o método create
router.post("/surveys", surveysController.create); // Definimos a rota (/surveys) com o Controller dos surveys chamando o método create
router.get("/surveys", surveysController.show); // Definimos a rota que executara a busca dos surveys
router.post("/sendMail", sendMailController.execute); // Definimos a rota que executara a os envios de e-mail
router.get("/answers/:value", answerController.execute); // Definimos a rota com seu params do controller da resposta do usuario
router.get("/nps/:survey_id", npsController.execute); // Definimos a rota para o calculo do NPS

export { router }