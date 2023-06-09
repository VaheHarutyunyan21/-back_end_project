const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')
const products_controller = require('../controller/products_controller')
const adminToken= require("../middleware/authenticateToken_middleware")



 function create_products_routes(app) {


    
app.get('/products',products_controller.all )
app.get('/dataProducts/:products_id',adminToken.authMidlweare, products_controller.dataID)
app.post('/products',adminToken.authMidlweare, products_controller.posts)
app.put('/changProducts/:products_id',adminToken.authMidlweare,products_controller.changId)
app.delete('/deleteProducts/:products_id',adminToken.authMidlweare,products_controller.deleteId)

 }

 module.exports = {create_products_routes}