import { Connection, createConnection, getConnectionOptions } from "typeorm"; // Fazendo o importe do typeorm 

export default async (): Promise<Connection> => { // Função assincrona devolvendo uma Promise de Connection
    
    const defaultOptions = await getConnectionOptions(); // Pegando todas as informações do "ormconfig"
    
    return createConnection(
        Object.assign(defaultOptions, { // Pegamos o a constante que pega as informações do orgconfig e utilizamos um OBJ para sobrescrever o "database"
            database: 
                process.env.NODE_ENV === "test" // Fazemos uma verificação na variavel de ambiente
                    ? "./src/database/database.test.sqlite" // Utilizando um if ternario verificamos se a variavel de ambiente é igual 'test' e se for utilizara o database especificado para teste
                    : defaultOptions.database, // Se não é igual a 'test' usara o database padrão do "orgconfig"
        }) 
    );
};