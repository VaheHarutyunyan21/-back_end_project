const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db')
const CryptoJS =require('crypto-js')
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
const SECRET = process.env.SECRET;
 

function generateAccessToken(users_id,username,isAdmin) {
  return jwt.sign({users_id,username,isAdmin},SECRET, { expiresIn: '1h' });
}


exports.loginController=(req, res) => {
    const username = req.body.username
    const password = req.body.password
     const hashed_password = CryptoJS.SHA256(password).toString();
    let sql = "SELECT * from users WHERE username = ?"
    db.get(sql,[username], function(err, row){  
      if(username != row.username && hashed_password != row.password) {
        return (res.sendStatus(403)) 
      }else {
          let token = generateAccessToken(row.users_id,row.username,row.isAdmin)
           res.send(JSON.stringify({status:"Logged in",jwt:token}));
      }

    }) 
  }