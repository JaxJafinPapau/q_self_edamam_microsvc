const dotenv = require('dotenv');
dotenv.config();

var config = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "q_self_edamam_microservice_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "q_self_edamam_microservice_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "database": "q_self_edamam_microservice_production",
    "dialect": "postgres",
    "operatorsAliases": false,
    "use_env_variable": "DATABASE_URL"
  }
}

module.exports = config;
