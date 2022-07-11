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

const updateProduct = async (name, id) => {
  const [updatedProduct] = await productModel.updateProductId(name, id);
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const [deleted] = await productModel.deleteProductId(id);
  return deleted;
};

module.exports = {
  getAll,
  getId,
  addProduct,
  updateProduct,
  deleteProduct,
};
