const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('urldb', 'user', 'password', {
    dialect: "sqlite",
    host: "./Config/urldb.sqlite"
});

module.exports = sequelize;