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

const addProduct = async (req, res) => {
  const { name } = req.body;
  const newProduct = await productService.addProduct(name);
  res.status(201).json(newProduct);
};

module.exports = {
  getAll,
  getId,
  addProduct,
};
