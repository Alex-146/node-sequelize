const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("User", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  age: {
    allowNull: false,
    type: Sequelize.INTEGER
  }
}, {
  tableName: "users",
  frezeeTableName: true,
  timestamps: false
});

module.exports = User;
