const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("User", {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.SMALLINT
  }
});

module.exports = User;