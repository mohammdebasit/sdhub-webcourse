const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const profile = sequelize.define(
  'profile',
  {
    // Model attributes are defined here
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

);

module.exports = profile
