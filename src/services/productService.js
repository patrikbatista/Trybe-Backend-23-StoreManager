const productModel = require('../models/productsModel');

const getAll = async () => {
  const result = await productModel.getAll();
  if (result.length === 0) {
    const error = {
      status: 404,
      message: 'Product not found',
    };
    throw error;
  }
  return result;
};

const getId = async (id) => {
  const resul = await productModel.getId(id);
  if (!resul) {
    const error = {
      status: 404,
      message: 'Product not found',
    };
    throw error;
  }
  return resul;
};

const addProduct = async (product) => {
  const resul = await productModel.add(product);
  return resul;
};

module.exports = {
  getAll,
  getId,
  addProduct,
};
