import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1615476665905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { // Método UP é para dar um UPdate na Migration
        await queryRunner.createTable( // Criando a tebela
            new Table({ // Instanciando a tabela com os dados 
                name: "users", // Nome da tabela
                columns: [ // Passando os dados das colunas
                    { // Coluna do ID
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    { //Coluna do name
                        name: "name",
                        type: "varchar", // varchar é a string do banco
                        // Valor dele por padrão é que não pode ser nulo
                    },
                    { // Coluna do email
                        name: "email",
                        type: "varchar",
                    },
                    { // Coluna da data
                        name: "created_at",
                        type: "timestamp",
                        default: "now()", // Dando como valor padrão a data de criação
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { // Método DOWN é quando queremos remover a migration
        await queryRunner.dropTable("users"); // Remove a tabela de "users"
    }

}
