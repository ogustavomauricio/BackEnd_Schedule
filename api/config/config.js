require('dotenv').config();
module.exports = 
  {
    "development": {
      "username": "gustavo",
      "password": "G5studio10*",
      "database": "schedule",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": DB_USER,
      "password": DB_PASSWORD,
      "database": DB_NAME,
      "host": DB_HOST,
      "dialect": "mysql"
    }
  }
