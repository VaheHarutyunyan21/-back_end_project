const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
const SECRET = process.env.SECRET;

// function verfyId(req,res){
//     const token = req.headers.authorization
//     const decoded=jwt.verify(token, SECRET)
//     if (decoded.users_id != null) {
//         return (res.sendStatus(403))
//     }else{
//         res.send(decoded.users_id)
//     }
     

//     }


exports.all=(req,res)=> {
    db.all('SELECT * FROM cart', [], (err, x) => {
        res.send(x)
        
    })
}

exports.dataID=(req, res) => {
    const id = req.params.users_id
    db.get('SELECT * FROM cart WHERE users_id=?', [id], (err, x) => {
        res.send(x)
    })
   
}



exports.posts=(req,res)=> {
        const users_id = req.body.users_id
        const products_id = req.body.products_id
        db.run('INSERT INTO cart (users_id ,products_id) values (?,?)', [users_id,products_id],(err) => {
            res.send("OOKKK")
        })
    
}



exports.deleteId= (req,res) => {
    const data_id = req.params.users_id
    const token = req.headers.authorization
    const decoded=jwt.verify(token, SECRET)
    //  const users_id = verfyId();
    if (data_id != decoded.users_id) {
        return (res.sendStatus(403))
    }else {
        db.run('DELETE FROM cart WHERE users_id=?', [data_id],(e)=>{
        res.send("ok")
    })
    }
           
}


