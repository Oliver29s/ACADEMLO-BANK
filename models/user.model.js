const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const User = db.define("modelName", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  accountNumber: {
    unique: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1000
  },

  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
});

module.exports = User;
