require("dotenv").config();

module.exports = {
  // "development": {
  //   "use_env_variable": "JAWSDB_URL",
  //   "dialect": "mysql"
  // },
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_SCHEMA,
    "host": process.env.DB_HOST, 
    "dialect": "mysql"
  },
  "test": {
    "use_env_variable": "JAWSDB_URL",

    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}