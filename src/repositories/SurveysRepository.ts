import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";

@EntityRepository(Survey) // Entidade é o Surve
class SurveysRepository extends Repository<Survey>{ 

}

export { SurveysRepository } 