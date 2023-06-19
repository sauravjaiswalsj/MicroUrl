const { Model, DataTypes } = require('sequelize')
const sequelize = require('../Config/db');
const dotenv = require('dotenv').config();
class Url extends Model { }

Url.init({
    longUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { sequelize, modelName: 'Url' });

sequelize.sync()
    .then(() => {
        console.log(`Tables has been created`);
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = Url;