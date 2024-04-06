const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: parseInt(process.env.PORT),
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false
        }
    }
});


// new sqlInstance.ConnectionPool(dotenv)



module.exports = sequelize;