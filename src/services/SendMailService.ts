import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

class SendMailService {

    private client: Transporter;

    constructor() {
        nodemailer.createTestAccount().then(account => { // ".then()" faz com que as resposta de sucesso ficam dentro dele, passando dentro dele o account informações da conta
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass,
                }
            });

            this.client = transporter // Passando o valor de detro do transporter para a variavel privada cliente
        }) 
    }

    async execute(to: string, subject: string, variables: object, path: string){ // Método que ira enviar o email
        
        const templateFileContent = fs.readFileSync(path).toString("utf8") // Leitura do arquivo (caminho) / (formato)

        const mailTemplateParse = handlebars.compile(templateFileContent); // Passara para o Handlebars o arquivo deseja para compilação

        const html = mailTemplateParse(variables); // variaveis sobre o "npsMail" que foram definidas no Controller são armazenadas nesta constante

        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: "NPS <noreplay@nps.com.br>"
        })

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}

export default new SendMailService(); // Criara uma instancia assim que a aplicação for rodada