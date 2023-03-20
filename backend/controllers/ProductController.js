const mysql = require('mysql2/promise');
// const config = require('./config.js')

class ProductController {
    static async getProducts(req, res) {

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: null
        });
        // const [rows, fields] = await connection.execute('select * from products');
        const [rows, fields] = await connection.execute('select products.id, products.name, products.status, products.date, products.price, products.group, users.name AS user_name, products.arrival, products.arrivalDate from products inner join users on products.user = users.id');

        await connection.end();

        return res.json(rows);
    }
}

module.exports = ProductController