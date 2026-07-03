const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const course = sequelize.define(
    'course',
    {
        // Model attributes are defined here
        courseName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        totalSems: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },


);

module.exports = course
