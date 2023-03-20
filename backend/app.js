// const config = require('./config');
const express = require('express');
const app = express();
const cors = require('cors');
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const OrderController = require('./controllers/OrderController')
const Order_Product_Controller = require('./controllers/Order_Product_Controller')
const db = require('./db')
const mysql = require("mysql2/promise");
const User = db.user;
const Product = db.product;
// async function main() {
app.use(cors())
app.use(express.json())
//get
app.get('/products', ProductController.getProducts);
app.get('/users', UserController.getUsers);
app.get('/orders', OrderController.getOrders);
app.get('/order_product_bind', Order_Product_Controller.getOrderProduct);
//create
app.post('/products', (req, res) => {
    const {
        name,
        status,
        date,
        state,
        price,
        group,
        user,
        arrival,
        arrivalDate
    } = req.body;
    // console.log('req.body: ', req.body);
    console.log(`name: ${name}`);
    console.log(`status: ${status}`);
    console.log(`date: ${date}`);
    console.log(`state: ${state}`);
    console.log(`price: ${price}`);
    console.log(`group: ${group}`);
    console.log(`user: ${user}`);
    console.log(`arrival: ${arrival}`);
    console.log(`arrivalDate: ${arrivalDate}`);

    //here BD
    sendProduct(req.body, res)

    res.send('product was got successfully')

    // return res.json(rows);

    res.send('Form product send successfully')
})
app.post('/users', (req, res) => {
    const {name, email, phone} = req.body;
    // console.log('req.body: ', req.body);
    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`phone: ${phone}`);

   //here BD
    writeToDB(req.body, res)

    res.send('user was got successfully')

    // return res.json(rows);

})
//update
app.put('/products/:id', (req, res) => {
    const bodyProduct = req.body;
    console.log('bodyProduct: ', bodyProduct)

    // const { id } = req.params;
    // const id = req.params.id
    // const {name, email, phone} = req.body;
    //
    // console.log(`name: ${name}`);
    // console.log(`email: ${email}`);
    // console.log(`phone: ${phone}`);
    //
    // updateUser(req.body, res, req.params.id)
    //
    // res.send('user was updated successfully')



    // const { id } = req.params;
    // const id = req.params.id
    const {
        name,
        status,
        date,
        state,
        price,
        group,
        user,
        arrival,
        arrivalDate,
    } = req.body;

    // console.log(`name: ${req.body.name}`);
    // console.log(`name: ${req.body.status}`);
    // console.log(`name: ${req.body.date}`);
    // console.log(`name: ${req.body.state}`);
    // console.log(`name: ${req.body.price}`);
    // console.log(`name: ${req.body.group}`);
    // console.log(`name: ${req.body.user}`);
    // console.log(`name: ${req.body.arrival}`);
    // console.log(`name: ${req.body.arrivalDate}`);

    updateProduct(req.body, res, req.params.id)

    res.send('product was updated successfully')
})
app.put('/users/:id', (req, res) => {
    // const { id } = req.params;
    const id = req.params.id
    const {name, email, phone} = req.body;

    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`phone: ${phone}`);

    updateUser(req.body, res, req.params.id)

    res.send('user was updated successfully')
})
//delete
app.delete('/products/:id', (req, res) => {
    const id = req.params.id

    deleteProduct(res, req.params.id)

    res.send('user was deleted successfully')
})
app.delete('/users/:id', (req, res)=> {
    const id = req.params.id

    deleteUser(res, req.params.id)

    res.send('user was deleted successfully')
})

require('dotenv').config();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server has been started on port ${process.env.APP_PORT}`);
});

function writeToDB(data, res) {
    // console.log('data.name: ', data.name);
    User.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
    }).then(result => {
        console.log(result);
        res.end('ok');
    }).catch(err => {
        console.log(err);
        res.end('error');
    })
}

function updateUser(data, res, id) {
    let values = {
        name: data.name,
        email: data.email,
        phone: data.phone
    };
    let condition = { where :{id: id} };

    User.update(values, condition)
        .then(result => {
            console.log(result);
            res.end('User updated successfully')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send('Error updating user')
        })
}

function deleteUser(res, id) {
    let condition = { where :{id: id} };

    User.destroy(condition)
        .then(result => {
        console.log(result);
        res.end('User has been deleted successfully')
    })
        .catch(error => {
            console.log(error)
            res.status(500).send('Error delete user')
        });
}

function sendProduct(data, res) {
    // console.log('data.name: ', data.name);
    Product.create({
        name: data.name,
        status: data.status,
        date: data.date,
        state: data.state,
        price: data.price,
        group: data.group,
        user: data.user,
        arrival: data.arrival,
        arrivalDate: data.arrivalDate
    }).then(result => {
        console.log(result);
        res.end('ok');
    }).catch(err => {
        console.log(err);
        res.end('error');
    })
}
function updateProduct(data, res, id) {
    let values = {
        name: data.name,
        status: data.status,
        date: data.date,
        state: data.state,
        price: data.price,
        group: data.group,
        user: data.user,
        arrival: data.arrival,
        arrivalDate: data.arrivalDate
    };
    let condition = { where :{id: id} };

    Product.update(values, condition)
        .then(result => {
            console.log(result);
            res.end('Product updated successfully')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send('Error updating product')
        })
}
function deleteProduct(res, id) {
    let condition = { where :{id: id} };

    Product.destroy(condition)
        .then(result => {
            console.log(result);
            res.end('Product has been deleted successfully')
        })
        .catch(error => {
            console.log(error)
            res.status(500).send('Error delete product')
        });
}
