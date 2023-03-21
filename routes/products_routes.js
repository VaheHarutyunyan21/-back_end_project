const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')
const products_controller = require('../controller/products_controller')
const usersToken=require("../middleware/UsersToken_middleware")



 function create_products_routes(app) {


    
app.get('/products',products_controller.all )
app.get('/dataProducts/:products_id', products_controller.dataID)
app.post('/products',usersToken.usersMidlweare, products_controller.posts)
app.put('/changProducts/:products_id',usersToken.usersMidlweare,products_controller.changId)
app.delete('/deleteProducts/:products_id',usersToken.usersMidlweare,products_controller.deleteId)

 }

 module.exports = {create_products_routes}