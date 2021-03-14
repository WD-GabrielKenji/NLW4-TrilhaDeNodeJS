import { Entity, EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User) // Definindo como repository passando a entidade
class UserRepository extends Repository<User>{ // Fazemos a herança para pegar os métodos de dentro do classe Repository do typeorm para ca

}

export { UserRepository } // Export é utilizado para ajudar o import do VSCode, deixando de uma maneira mais limpa