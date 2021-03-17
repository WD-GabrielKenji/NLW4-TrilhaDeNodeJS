

export class AppError {
    // variaveis publicas
    public readonly message: string; 
    public readonly statusCode: number;

    //Métodos construtores
    constructor(message: string, statusCode = 400){ 
        this.message = message;
        this.statusCode = statusCode;
    }
}