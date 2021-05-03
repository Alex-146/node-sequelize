const Sequelize = require("sequelize");

const config = {
  local: "postgres://postgres:admin@localhost:5432/myFirstDatabase",
  heroku: process.env.DATABASE_URL
}

const isProduction = process.env.NODE_ENV === "production";
const url = isProduction ? config.heroku : config.local;

// https://coderoad.ru/27687546/Не-удается-подключиться-к-базе-данных-heroku-postgresql-из-приложения

const options = isProduction ? {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true
  }
 } : {};

const db = new Sequelize(url, options);

module.exports = db;
