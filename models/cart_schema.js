const sql = ("CREATE TABLE IF NOT EXISTS cart (cart_id INTEGER PRIMARY KEY,users_id INTEGER NOT NULL, products_id INTEGER NOT NULL,FOREIGN KEY (users_id) REFERENCES users (users_id),FOREIGN KEY (products_id) REFERENCES products (products_id))");

function create_cart(my_database){
    my_database.run(sql)
}

module.exports = {create_cart};