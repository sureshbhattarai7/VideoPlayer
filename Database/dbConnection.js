const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: parseInt(process.env.PORT),
    dialect: 'mssql',
    dialectOptions: {
        options: {
            database: process.env.DB_DATABASE,
            encrypt: false
        }
    }
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection to the database has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

async function syncModels() {
    try {
        await sequelize.sync();
        console.log("Models have been synchronized with the database.");
    } catch (error) {
        console.error("Unable to sync models with the database:", error);
    }
}
syncModels();
testConnection();

module.exports = sequelize;