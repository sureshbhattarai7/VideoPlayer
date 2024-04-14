const { Sequelize } = require('sequelize');
const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });


const sqlConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

const testConnection = async () => {
    try {
        await sql.connect(sqlConfig);
        console.log("Connection to the database has been established successfully!");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
testConnection();


module.exports = sqlConfig;