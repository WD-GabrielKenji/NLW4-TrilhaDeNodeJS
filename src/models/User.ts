import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"; // Importando a versão do uuid e renomenado para "uuid"

@Entity("users") // Identificando a classe como uma entidade usando a notação do typeorm
class User {

    @PrimaryColumn() // Definindo essa coluna como chave primaria
    readonly id: string;

    @Column() // Simples coluna 
    name: string;

    @Column()
    email: string;

    @CreateDateColumn() // Coluna de date / Ira fazer toda a inserção automaticamente
    created_at: Date;

    constructor() {
        if(!this.id) { // Se o id não existir
            this.id = uuid(); // Então o id tera o valor de uuid
        }
    }
}

export { User }