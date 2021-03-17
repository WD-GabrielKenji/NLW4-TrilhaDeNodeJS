import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Survey } from "./Survey";
import { User } from "./User";

@Entity("surveys_users")
class SurveyUser {

    @PrimaryColumn() // Definindo essa coluna como chave primaria
    readonly id: string;

    @Column()  
    user_id: string;  

    // Referenciando o User
    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User

    @Column()
    survey_id: string;

    // Referenciando o User
    @ManyToOne(() => Survey)
    @JoinColumn({name: "survey_id"})
    survey: Survey

    @Column()
    value: number

    @CreateDateColumn() // Coluna de date / Ira fazer toda a inserção automaticamente
    created_at: Date;

    constructor() {
        if(!this.id) { // Se o id não existir
            this.id = uuid(); // Então o id tera o valor de uuid
        }
    }

}

export { SurveyUser }