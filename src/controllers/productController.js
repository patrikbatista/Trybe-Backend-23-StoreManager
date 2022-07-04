const productService = require('../services/productService');

const getAll = async (req, res) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const getId = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getId(id);
  res.status(200).json(product);
};

module.exports = {
  getAll,
  getId,
};
