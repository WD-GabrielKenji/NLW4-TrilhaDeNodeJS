import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSurveysUsers1615919245159 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "surveys_users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    { // Chave estrangeira de User
                        name: "user_id", // Reverenciando o usuario da pesquisa
                        type: "uuid"
                    },
                    { // Chave estrangeira de Survey
                        name: "survey_id", // Reverenciando a pesquisa do usuario
                        type: "uuid",
                    },
                    {
                        name: "value",
                        type: "number",
                        isNullable: true, // Definimos como valor inical como nulo para evitar erros, pois este campo n riva preenchido quando começar a criação da resposta ao usuario e resultara em um erro
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    { // Atraves disso toda vez que a coluna "user_id" for lida pela tabela, ele sabera que é sobre as referencias descritas aqui
                        name: "FKUser", 
                        referencedTableName: "users", // Nome da tabela de referencia 
                        referencedColumnNames: ["id"], // Nome da coluna de referencia dentro da tabela referenciada
                        columnNames: ["user_id"], // qual coluna desta tabela esta referenciando a FK
                        onDelete: "CASCADE", // Ira deletar os dados desta tabela, caso houver um delete da tabela ou da coluna referenciado, atualizando esta tabela tambem 
                        onUpdate: "CASCADE", // Ira atualizar os dados desta tabela, caso houver alterações nos dados feitos na outra tabela, atualizando esta tabela tambem
                    },
                    {
                        name: "FKSurvey", 
                        referencedTableName: "surveys",
                        referencedColumnNames: ["id"],
                        columnNames: ["survey_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys_users");
    }

}
