const Sequelize = require('sequelize')
require('dotenv').config();

module.exports = function (sequelize) {
    return sequelize.define('users',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false,
        tableName: process.env.DB_USER_TABLE
    });
}