import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("surveys")
class Survey {

    @PrimaryColumn() // Definindo essa coluna como chave primaria
    readonly id: string;

    @Column() // Simples coluna 
    title: string;

    @Column()
    description: string;

    @CreateDateColumn() // Coluna de date / Ira fazer toda a inserção automaticamente
    created_at: Date;

    constructor() {
        if(!this.id) { // Se o id não existir
            this.id = uuid(); // Então o id tera o valor de uuid
        }
    }

}

export { Survey }