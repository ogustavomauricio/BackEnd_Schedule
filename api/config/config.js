require('dotenv').config();
const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;
module.exports = 
  {
    "development": {
      "username":DB_USERNAME,
      "password":PASSWORD_POSTGRES,
      "database":DATABASE,
      "host":HOST,
      "port": DB_PORT,
      "dialect": "postgres"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username":DB_USERNAME,
      "password":PASSWORD_POSTGRES,
      "database":DATABASE,
      "host":HOST,
      "port": DB_PORT,
      "dialect": "postgres"
    }
  }
