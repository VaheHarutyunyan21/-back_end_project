const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')


exports.all=(req,res)=> {
    db.all('SELECT * FROM products', [], (err, x) => {
        res.send(x)
        
    })
}

exports.dataID=(req, res) => {
    const id = req.params.products_id
    db.get('SELECT * FROM products WHERE products_id=?', [id], (err, x) => {
        res.send(x)
    })
   
}



exports.posts=(req,res)=> {
        const name = req.body.name
        const price = req.body.price
        db.run('INSERT INTO products (name,price) values (?,?)', [name,price],(err) => {
            res.send("OOKKK")
        })
    
}


exports.changId=(req,res)=>{
    const id = req.params.products_id;
    const name = req.body.name;
    const price = req.body.price;
    db.run('UPDATE products SET name=?,  price=? WHERE products_id=?',[name,price,id],(e)=>{
        res.send('OKKK')
    })
}


exports.deleteId= (req,res) => {
    const data_id = req.params.products_id
    db.run('DELETE FROM products WHERE products_id=?', [data_id],(e)=>{
        res.send("ok")
    })
}
