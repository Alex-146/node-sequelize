const Sequelize = require("sequelize");

const config = {
  local: "postgres://postgres:admin@localhost:5432/myFirstDatabase",
  heroku: process.env.DATABASE_URL
}

const url = process.env.NODE_ENV === "production" ? config.heroku : config.local;

const db = new Sequelize(url);

module.exports = db;
