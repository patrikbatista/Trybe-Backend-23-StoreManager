const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.query('SELECT * FROM products');
  return products;
};

const getId = async (id) => {
  const [[product]] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

const add = async (name) => {
  const newProduct = await connection
    .query('INSERT INTO products (name) VALUES (?)', [name]);
  console.log(newProduct);
  return { id: newProduct.insertId, name };
};

module.exports = {
  getAll,
  getId,
  add,
};
