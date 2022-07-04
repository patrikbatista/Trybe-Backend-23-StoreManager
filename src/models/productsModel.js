const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.query('SELECT * FROM products');
  return products;
};

module.exports = {
  getAll,

};
