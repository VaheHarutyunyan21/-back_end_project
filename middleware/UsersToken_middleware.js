const jwt = require('jsonwebtoken');

const SECRET = "dfghjk"

exports.usersMidlweare=(req, res, next)=> {
    const token = req.headers.authorization
    if (token == null) {
        return res.sendStatus(401)
      }
      const decodedTocen=jwt.verify(token,SECRET);
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          return (res.sendStatus(403))
        }
       if (decodedTocen.isAdmin!=1 && decodedTocen.id!=req.params.id ) {
        return (res.sendStatus(403))
       }
      
        next()
      })
    }
  