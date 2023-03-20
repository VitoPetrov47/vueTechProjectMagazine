const mysql = require('mysql2/promise');
// const config = require('./config.js')

class OrderController {
    static async getOrders(req, res) {

        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: null
        });
        // const [rows, fields] = await connection.execute('select * from orders');
        const [rows, fields] = await connection.execute('SELECT orders.id, orders.date, users.name AS user_name, orders.total_price FROM orders inner JOIN users on orders.user_name = users.id;')
        // const [rows, fields] = await connection.execute('SELECT orders.id, orders.date, users.name AS user_name, SUM(products.price * order_product_bind.count) AS total_price FROM orders INNER JOIN users ON orders.user_name = users.id JOIN order_product_bind ON orders.id = order_product_bind.order_id JOIN products ON order_product_bind.product_id = products.id GROUP BY orders.id;');

        await connection.end();

        return res.json(rows);
    }
}

module.exports = OrderController