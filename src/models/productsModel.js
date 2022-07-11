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
  const [newProduct] = await connection
    .query('INSERT INTO products (name) VALUES (?)', [name]);
  return { id: newProduct.insertId, name };
};

const updateProductId = async (id, name, quantity) => {
  const result = await connection
  .query('UPDATE products SET name = ? WHERE id = ?', [name, id]);
  return result;
};

const deleteProductId = async (id) => {
 const result = await connection.query('DELETE FROM products WHERE id = ?', [id]);
 console.log(result);
 return result;
};

module.exports = {
  getAll,
  getId,
  add,
  updateProductId,
  deleteProductId,
};
