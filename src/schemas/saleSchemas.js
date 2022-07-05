const productsModel = require('../models/productsModel');

const isProductId = async (id) => {
  if (Number(id) === undefined) {
    const error = {
      status: 400,
      message: '"productId" is required',
    };
    throw error;
  }
  const productExist = await productsModel.getId(Number(id));
  if (!productExist) {
    const error = {
      status: 404,
      message: 'Product not found',
    };
    throw error;
  }
};

const isQuantity = (quantity) => {
  if (Number(quantity) === undefined) {
    const error = {
      status: 400,
      message: '"quantity" is required',
    };
    throw error;
  }

  if (Number(quantity) <= 0) {
    const error = {
      status: 400,
      message: '"quantity" must be greater than or equal to 1',
    };
    throw error;
  }
};
const salesValidate = (sales) => {
  sales.forEach((sale) => {
    isProductId(sale.productId);
    isQuantity(sales.quantity);
 });
};

module.exports = {
  salesValidate,
};
