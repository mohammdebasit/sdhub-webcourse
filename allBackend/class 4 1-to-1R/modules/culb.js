const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const club = sequelize.define(
    'club',
    {
        // Model attributes are defined here
        clubName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
        },
    },
);

module.exports = club