const connection = require('./connection');

const postSales = async (array) => {
  const [newSale] = await connection
  .query('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES ?',
  [array]);
  return newSale;
};

const postNewSale = async () => {
  const [result] = await connection.query('INSERT INTO sales (date) VALUES (NOW())');
  return result.insertId;
};

module.exports = {
  postSales,
  postNewSale,
};
