const sql = ("CREATE TABLE IF NOT EXISTS users(users_id INTEGER PRIMARY KEY,username TEXT, password TEXT ,isAdmin INTEGER DEFAULT 0)");

function create_users(my_database){
    my_database.run(sql)
}

module.exports = {create_users};