const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')


exports.all=(req,res)=> {
    db.all('SELECT * FROM users', [], (err, x) => {
        res.send(x)
        
    })
}

exports.dataID=(req, res) => {
    const id = req.params.id
    db.get('SELECT * FROM users WHERE id=?', [id], (err, x) => {
        res.send(x)
    })
   
}

exports.deleteId= (req,res) => {
    const data_id = req.params.id
    db.run('DELETE FROM users WHERE id=?', [data_id],(e)=>{
        res.send("ok")
    })
}
