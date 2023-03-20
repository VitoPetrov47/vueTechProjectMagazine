const Sequelize = require('sequelize')
require('dotenv').config();

module.exports = function (sequelize) {
    return sequelize.define('orders',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        user_name: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        total_price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: process.env.DB_ORDER_TABLE
    });
}