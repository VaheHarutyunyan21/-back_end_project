const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')
const users_controller = require('../controller/users_controller')
const adminToken= require("../middleware/authenticateToken_middleware")
const usersAdminToken=require("../middleware/Users&AdminToken_middleware")


 function create_users_routes(app) {


    
app.get('/users',adminToken.authMidlweare,users_controller.all )
app.get('/dataUsers/:users_id',usersAdminToken.usersAdminMidlweare, users_controller.dataID)
app.delete('/deleteUsers/:users_id',usersAdminToken.usersAdminMidlweare, users_controller.deleteId)

 }

 module.exports = {create_users_routes}