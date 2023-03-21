const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')


exports.all=(req,res)=> {
    db.all('SELECT * FROM cart', [], (err, x) => {
        res.send(x)
        
    })
}

exports.dataID=(req, res) => {
    const id = req.params.cart_id
    db.get('SELECT * FROM cart WHERE cart_id=?', [id], (err, x) => {
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


exports.changId=(req,res)=>{
    const cart_id = req.params.cart_id;
    const users_id = req.body.users_id;
    const products_id = req.body.products_id;
    db.run('UPDATE cart SET users_id=?,  products_id=? WHERE cart_id=?',[users_id,products_id,cart_id],(e)=>{
        res.send('OKKK')
    })
}


exports.deleteId= (req,res) => {
    const data_id = req.params.cart_id
    db.run('DELETE FROM cart WHERE cart_id=?', [data_id],(e)=>{
        res.send("ok")
    })
}
