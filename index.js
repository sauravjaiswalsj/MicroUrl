const express = require('express');
const app = express();
const routes = require('./Routes/routes');
const sequelize = require('./Config/db');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 8080;

//middlewares
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

//Check the connection with the Db
try {
    sequelize.authenticate().then(() => {
        console.log(`Authentication to db succeeded.`);
    }).catch((err) => {
        console.log(`Error occured during authentication. \n ${err}`);
    })
} catch (err) {
    console.error(`Unable to connect with the database: ${err}`);
}

app.listen(PORT, () => {
    console.log(`App is listenning on port: ${PORT}`);
})