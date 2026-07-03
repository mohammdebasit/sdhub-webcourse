const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const teacher = sequelize.define(
    'teacher',
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
);

module.exports = teacher