const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')
const cart_controller = require('../controller/cart_controller')




 function create_cart_routes(app) {


    
app.get('/cart',cart_controller.all )
app.get('/dataCart/:id', cart_controller.dataID)
app.post('/cart', cart_controller.posts)
app.put('/changCart/:id',cart_controller.changId)
app.delete('/deleteCart/:id',cart_controller.deleteId)

 }

 module.exports = {create_cart_routes}