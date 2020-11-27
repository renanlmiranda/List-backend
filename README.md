# Softwrap-backend
 
Link: [Projeto](https://softwrap-deploy.herokuapp.com/users)

## Iniciar o projeto

- Clonar repositório: git clone {link}.
- Instalar dependências: yarn install.
- Usar o docker ou mongoDB atlas.
- Criar .env baseado no .env.example
- Iniciar projeto: yarn start

## Dependências

- Express
- Eslint/Prettier
- Nodemon
- Mongodb
- Docker > Dev
- Atlas > Prod
- Mongoose

## Relatório

Utilizei o mongoDB no docker em ambiente de desenvolvimento e em produção estou utilizando no mongoDB Atlas, fiquei bastante tempo na parte de fazer o deploy da api porque na primeira tentativa fiz na Digital Ocean, onde deu certo mas como não tinha um domínio acabei tendo problemas com requisições HTTPS do front, então acabei colocando no Heroku,
utilizei o mongoose para conexão do banco e na criação do schema de user, pretendo fazer melhorias nas validações da api porque atualmente estão bem focadas na model do banco, onde coloquei algumas validações.



