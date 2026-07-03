const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const student = sequelize.define(
  'student',
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },

);

module.exports = student
