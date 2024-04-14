const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

const userRoute = require('./Router/userRoute');

const app = express();
app.use(express.json());

app.use('/api/v1/users', userRoute);

module.exports = app;