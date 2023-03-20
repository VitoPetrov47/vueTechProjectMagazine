const mysql = require('mysql2/promise');
// const config = require('./config.js')

class Order_Product_Controller {
    static async getOrderProduct(req, res) {

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: null
        });
        // const [rows, fields] = await connection.execute('select * from orders');
        const [rows, fields] = await connection.execute('select * from order_product_bind');
        await connection.end();

        return res.json(rows);
    }
}

module.exports = Order_Product_Controller