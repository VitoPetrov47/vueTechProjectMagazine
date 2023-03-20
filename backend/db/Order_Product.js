const Sequelize = require('sequelize')
require('dotenv').config();

module.exports = function (sequelize) {
    return sequelize.define('order_product_bind',{
        order_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        product_id: {
            type: Sequelize.DATE,
            allowNull: false
        },
        count: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: false,
        tableName: process.env.DB_ORDER_PRODUCT_TABLE
    });
}