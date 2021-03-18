<h1 align="center" id="introducao"> <strong>Calculate NPS</strong> </h1>

<p align="center">
 <a href="#introducao">Introdução</a> •
 <a href="#projeto">Projeto</a> •
 <a href="#tecnologias">Tecnologias Utilizadas</a> •
 <a href="#documentacao">Documentação</a> • 
 <a href="#execucao">Como Executar</a> • 
 <a href="#licenca">Licença</a> •
 <a href="#autor">Autor</a> •
 <a href="#contato">Contato</a> 
</p>

--------------------------- 

<br>

# :fire: <Strong> Obrigado por visualizar este repositório </Strong> <img src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" width="28px" alt="hi">

<p align="justify"> Primeiramente, olá me chamo Gabriel Kenji Poli Ozaki, sou um estudante de Ciência da Computação e estou querendo atuar na área de Desenvolvimento Web. </p>

<p align="justify"> Para uma descrição melhor sobre minha pessoa, acesse o README em meu perfil do GITHUB. Nele contém minha história, tecnologias nas quais já programei e ambições pessoais. </p>

## :computer: <strong id="projeto">Sobre o Projeto </strong>

<p align="justify"> O Calculate NPS é uma aplicação Back-end que consiste em calcular o NPS da empresa. Nele fazemos o cadastro de usuários, cadastro de pesquisas, envio de e-mail para os usuários responderem as pesquisas de satisfação e com isso podemos realizar o cálculo do NPS. </p>

## :rocket: <Strong id="tecnologias"> Tecnologias Utilizadas </Strong>

<p align="justify"> Este projeto foi desenvolvido utilizando as seguintes tecnologias: </p>

<ul>
    <li> <a href="https://nodejs.org/en/">NodeJS</a> </li>
    <li> <a href="https://expressjs.com/pt-br/">Express</a> </li>
    <li> <a href="https://typeorm.io/#/">TypeORM</a> </li>
    <li> <a href="https://www.npmjs.com/package/sqlite3">SQLite3</a> </li>
    <li> <a href="https://www.npmjs.com/package/uuid">uuid</a> </li>
    <li> <a href="https://insomnia.rest/">Insomnia</a> </li>
    <li> <a href="https://www.beekeeperstudio.io/">SQL Editor Beekeeper Studio</a> </li>
    <li> <a href="https://ethereal.email/">Ethereal-Email</a> </li>
    <li> <a href="https://nodemailer.com/about/">Nodemailer</a> </li>
    <li> <a href="https://www.npmjs.com/package/reflect-metadata">Reflect-metadata</a> </li>
    <li> <a href="https://handlebarsjs.com/">Handlebars</a> </li>
    <li> <a href="https://www.npmjs.com/package/express-async-errors">ExpressJS Async Errors</a> </li>
</ul>
<p align="justify">Ferramentas utilziadas para os Testes Automatizados: </p>

<ul>
    <li> <a href="https://jestjs.io/">Jest</a> </li>
    <li> <a href="https://www.npmjs.com/package/supertest">SuperTest</a> </li>
</ul>


## :book: <strong id="documentacao"> Detalhes aprofundados sobre o projeto </strong>

<details>
<summary>
  Documentação com os detalhes do projeto...
</summary>

<br>

<p align="justify"> Em Construção... </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

<p align="justify"> </p>

</details>

## :runner: <strong id="execucao"> Como executar o projeto </strong>

[![Yarn Badge](https://img.shields.io/badge/yarn-1.22.5-brightgreen)](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

```bash
# Fazer o clone do Repositorio.
>> Git Clone: https://github.com/WD-GabrielKenji/NLW4-TrilhaDeNodeJS.git
```

```bash
# Instalar as dependencias com yarn: 
>> yarn install

# Criar uma Migration:
>> yarn typeorm migration:run

# Iniciar o servidor via yarn:
>> yarn dev 
```

<p align="justify"> Utilizando API Insomnia: </p>

<pre># Crie um <strong>New Folder chamado "Users"</strong> -> Dentro dele crie um <strong>New Request chamado "Create"</strong> utilizando o <strong>método POST</strong> e no <strong>formato JSON</strong>:
<details>
<summary>Users</summary>
# Utilizando a rota: <code>[http://localhost:3333/users]</code> insira sobre o Body:
<code>{
   "name": "Nome Exemplo",
   "email": "exemplo@exemplo.com.br"
}</code>
</details></pre>

<pre># Crie um <strong>New Folder chamado "Surveys"</strong> -> Dentro dele crie um <strong>New Request chamado "Create"</strong> utilizando o <strong>método POST</strong> e no <strong>formato JSON</strong>:
<details>
<summary>Surveys</summary>
# Utilizando a rota: <code>[http://localhost:3333/surveys]</code> insira sobre o Body:
<code>{
   "title": "Queremos ouvir sua opinião!",
   "description": "De 0  a 10, quanto você recomendaria a Rocketseat?"
}</code>
</details></pre>

<pre># Crie um <strong>New Folder chamado "SendMail"</strong> -> Dentro dele crie um <strong>New Request chamado "Send"</strong> utilizando o <strong>método POST</strong> e no <strong>formato JSON</strong>:
<details>
<summary>SendMail</summary>
# Utilizando a rota: <code>[http://localhost:3333/sendMail]</code> insira sobre o Body:
<code>{
   "email": "exemplo@exemplo.com.br",
   "survey_id": "ID Survey"
}</code>
</details></pre>

<pre># GET NPS:
<details>
<summary>NPS</summary>
# Crie um <strong>New Folder chamado "NPS"</strong> -> Dentro dele crie um <strong>New Request chamado "CalculateNps"</strong> utilizando o <strong>método GET</strong>:
# Utilizando a <strong>URL: <code>[http://localhost:3333/nps/IdSurveyQueQuer]</code></strong> -> <strong>Faça um Send</strong> sobre o Request e <strong>verifique as informações buscadas</strong>.
</details></pre>

<pre>
# DICA: Visualize os dados e as tabelas utilziando o Beekeeper Studio! 
</pre>


## :closed_book: <strong id="licenca"> Licença </strong>

<img alt="GitHub" src="https://img.shields.io/github/license/facebook/react"/>

Esse projeto esta sob a licença MIT. Veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

## :boy: <strong id="autor"> Autor </strong>

<a href="https://github.com/WD-GabrielKenji">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/77596710?s=400&u=70de2ffcac45b9e0db00c828fe785d4a76ac3f65&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Kenji Poli Ozaki</b></sub></a> <a href="https://github.com/WD-GabrielKenji" title="Perfil Github"> :star2: 
</a>

Feito de ❤️ por Gabriel Kenji 👋🏽

### :mailbox_with_mail: <strong id="contato"> Redes Sociais para Contato: </strong>

<p> Entre em contato, atraves destas redes sociais: </p>

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel_Kenji_Poli_Ozaki-0e76a8?style=flat&labelColor=0e76a8&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wdkenji/)  [![Mail Badge](https://img.shields.io/badge/-@biel.kenjii-C63381?style=flat&labelColor=C63381&logo=instagram&logoColor=white)](https://www.instagram.com/biel.kenjii/)  [![Mail Badge](https://img.shields.io/badge/-g.kenjiJS-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white)](mailto:g.kenjiJS@gmail.com)

[![GitHub followers](https://img.shields.io/github/followers/WD-GabrielKenji.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/WD-GabrielKenji)
