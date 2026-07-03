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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);

module.exports = student