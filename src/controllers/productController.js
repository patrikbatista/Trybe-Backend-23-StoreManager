const productService = require('../services/productService');
const productSchemas = require('../schemas/productSchemas');

const getAll = async (req, res) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

const getId = async (req, res) => {
  const { id } = req.params;

  const product = await productService.getId(id);
  return res.status(200).json(product);
};

const addProduct = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  const newProduct = await productService.addProduct(name);
  return res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  productSchemas.isName(name);
  await productService.getId(id);
  await productService.updateProduct(name, id);
  const result = await productService.getId(id);
  return res.status(200).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  await productService.getId(id);
  await productService.deleteProduct(id);
  return res.status(204).end();
};

module.exports = {
  getAll,
  getId,
  addProduct,
  updateProduct,
  deleteProduct,
};
