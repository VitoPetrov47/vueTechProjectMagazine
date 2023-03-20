const Sequelize = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, null, {
    dialect: "mysql",
    host: process.env.DB_HOST
})

const Users = require('./Users')(sequelize);
const Products = require('./Products')(sequelize);

module.exports = {
    sequelize: sequelize,
    user: Users,
    product: Products
}