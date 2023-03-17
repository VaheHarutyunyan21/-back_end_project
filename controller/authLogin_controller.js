const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('database.db')
const CryptoJS =require('crypto-js')
const jwt = require('jsonwebtoken');
 

const SECRET = "dfghjk"

function generateAccessToken(id,username,isAdmin) {
  return jwt.sign({id,username,isAdmin},SECRET, { expiresIn: '1h' });
}


exports.loginController=(req, res) => {
    const username = req.body.username
    const password = req.body.password
     const hashed_password = CryptoJS.SHA256(password).toString();
    // let token = generateAccessToken(username,isAdmin)
     //console.log(token)
    let sql = "SELECT * from users WHERE username = ?"
    db.get(sql,[username], function(err, row){  
         //console.log(row)  
      if(username == row.username && hashed_password == row.password) {
       
        let token = generateAccessToken(row.id,row.username,row.isAdmin)

         res.json({token})
          //res.send(JSON.stringify({status: "Logged in"}));
      }else {
          res.send(JSON.stringify({status: "Wrong credentials"}));
      }

    }) 
  }