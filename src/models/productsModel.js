const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.query('SELECT * FROM products');
  return products;
};

const getId = async (id) => {
  const [[product]] = await connection.query('SELECT * FROM products WHERE id = ?', [id]);
  return product;
};

module.exports = {
  getAll,
  getId,
};
