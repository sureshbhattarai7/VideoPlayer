const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            enableArithAbort: false,
            cryptoCredentialDetails: {
                minVersion: 'TLSv1'
            }
        }
    }.then(() => {
        console.log('Database Connection Successful!')
    }).catch((err) => {
        console.log(err.message);
        console.log('Database Connection Failed!')
    })
});

module.exports = sequelize;