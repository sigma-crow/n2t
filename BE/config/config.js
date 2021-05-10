const dotenv = require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "N2T",
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: "mysql",
  },
  test: {
    username: global,
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "N2T",
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: "mysql",
  },
};
