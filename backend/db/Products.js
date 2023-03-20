const Sequelize = require('sequelize')
require('dotenv').config();

module.exports = function (sequelize) {
    return sequelize.define('products',{
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
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        group: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        user: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        arrival: {
            type: Sequelize.STRING,
            allowNull: false
        },
        arrivalDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: process.env.DB_PRODUCT_TABLE
    });
}