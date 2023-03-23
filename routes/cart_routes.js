const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')
const cart_controller = require('../controller/cart_controller')
const adminToken= require("../middleware/authenticateToken_middleware")
const usersAdminToken=require("../middleware/Users&AdminToken_middleware")
const usersToken=require("../middleware/UsersToken_middleware")





 function create_cart_routes(app) {


    
app.get('/cart',adminToken.authMidlweare,cart_controller.all )
app.get('/dataCart/:users_id',usersAdminToken.usersAdminMidlweare, cart_controller.dataID)
app.post('/cart',usersToken.usersMidlweare, cart_controller.posts)
app.delete('/deleteCart/:users_id',usersToken.usersMidlweare, cart_controller.deleteId)

 }

 module.exports = {create_cart_routes}