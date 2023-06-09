const express = require('express')
const sqlite = require('sqlite3').verbose()
const app = express()
const port = 3000
const cors =require('cors')
const CryptoJS =require('crypto-js')
const jwt = require('jsonwebtoken');
const products_routes = require('./routes/products_routes')
const users_routes = require('./routes/users_routes')
const auth_routes = require('./routes/auth_routes')
const cart_routes = require('./routes/cart_routes')
const users_schema = require('./models/users_schema')
const cart_schema = require('./models/cart_schema')
const products_schema = require('./models/products_schema')



app.use(cors())
app.use(express.json())


const db = new sqlite.Database('database.db', (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("OK")
    }
})

products_routes.create_products_routes(app)
users_routes.create_users_routes(app)
users_schema.create_users(db)
products_schema.create_products(db)
cart_schema.create_cart(db)
auth_routes.register_routes(app)
auth_routes.login_routes(app)
cart_routes.create_cart_routes(app)




app.listen(port)