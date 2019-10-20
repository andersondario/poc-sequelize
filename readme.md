
### Description
This is a basic node application using SQL database with Sequelize as ORM.

## How to execute
- Create *.env.dev* or '.env.prod' in root directory and define the environment variables cited in *src/config/database.js. Also, define SERVER_PORT variable, which is the port where application will be provide.
- Change scripts in *package.json* to use NODE_ENV=dev or NODE_ENV=prod
- Run de follow commands:
```console
docker-compose up -d // if run locally
yarn install
yarn sequelize db:create
yarn sequelize db:migrate
yarn start
```
