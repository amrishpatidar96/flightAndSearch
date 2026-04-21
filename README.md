# Welcome to Flights Service

## Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json
```
{
   "development": {
    "username": "<DB_USERNAME>",
    "password": "<DB_password>",
    "database": "Flights_Sarch_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
once you have added your db config as listed above , goto the src folder from your terminal and execute `npx sequelize db:crate`