const sqlite = require('sqlite3').verbose()
const db = new sqlite.Database('database.db')


exports.all=(req,res)=> {
    db.all('SELECT * FROM users_id=?', [], (err, x) => {
        res.send(x)
        
    })
}

exports.dataID=(req, res) => {
    const id = req.params.users_id
    db.get('SELECT * FROM users WHERE users_id=?', [id], (err, x) => {
        res.send(x)
    })
   
}

exports.deleteId= (req,res) => {
    const data_id = req.params.users_id
    db.run('DELETE FROM users WHERE users_id=?', [data_id],(e)=>{
        res.send("ok")
    })
}
