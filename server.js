const express = require('express');
const sequelize = require('./Database/dbConnection');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
