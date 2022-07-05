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

const getSales = async () => {
  const [result] = await connection
  .query(`SELECT
  sale_id as saleId,
  date,
  product_id as productId,
  quantity
  FROM
  StoreManager.sales_products as sp
  INNER JOIN StoreManager.sales as venda
  ON
  sp.sale_id = venda.id;`);
  return result;
};

const getSaleId = async (id) => {
  const [result] = await connection
  .query(`SELECT
  date,
  product_id as productId,
  quantity
  FROM
  StoreManager.sales_products as sp
  INNER JOIN StoreManager.sales as venda
  ON
  sp.sale_id = venda.id
  WHERE sp.sale_id = ?;`, [id]);
  return result;
};

module.exports = {
  postSales,
  postNewSale,
  getSales,
  getSaleId,
};
