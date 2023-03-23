const jwt = require('jsonwebtoken');
require('dotenv').config();
 
const SECRET = process.env.SECRET;


exports.usersAdminMidlweare=(req, res, next)=> {
    const token = req.headers.authorization
    if (token == null) {
        return res.sendStatus(401)
      }
      const decodedTocen=jwt.verify(token,SECRET);
      //console.log(decodedTocen)
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          return (res.sendStatus(403))
        }
       if (decodedTocen.isAdmin!=1 && decodedTocen.users_id!=req.params.users_id ) {
        return (res.sendStatus(403))
       }
      
        next()
      })
    }