const sql = ("CREATE TABLE IF NOT EXISTS products(products_id INTEGER PRIMARY KEY,name TEXT, price INT)");

function create_products(my_database){
    my_database.run(sql)
}

module.exports = {create_products};