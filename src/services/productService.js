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

module.exports = {
  getAll,
};
