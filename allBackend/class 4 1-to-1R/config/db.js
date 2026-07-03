const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('relationshipPrac', 'root', 'password', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

async function sync() {
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
}

module.exports = { sequelize, connectDB, sync }