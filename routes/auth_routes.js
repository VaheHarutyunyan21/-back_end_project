const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db')
const authRegister=require('../controller/authRegister_controller')
const authLogin=require('../controller/authLogin_controller')


exports.register_routes=(app)=> {

    app.post('/register',authRegister.registerController)

}

exports.login_routes=(app)=> {

    app.post('/login',authLogin.loginController)

}






