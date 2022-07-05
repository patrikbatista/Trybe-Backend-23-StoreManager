const saleModel = require('../models/salesModel');

const addSale = async (arraySales) => {
  const idSale = await saleModel.postNewSale();
  const mapedSale = arraySales.map((element) => [idSale, element.productId, element.quantity]);
  await saleModel.postSales(mapedSale);
  const sale = {
    id: idSale,
    itemsSold: arraySales,
  };

  return sale;
};

const getSales = async () => {
  const result = await saleModel.getSales();
  if (!result) {
    const error = {
      status: 404,
      message: 'Sale not found',
    };
    throw error;
  }
  return result;
};

const getSaleId = async (id) => {
  const result = await saleModel.getSaleId(id);
  if (result.length === 0) {
    const error = {
      status: 404,
      message: 'Sale not found',
    };
    throw error;
  }
  return result;
};

module.exports = {
  addSale,
  getSales,
  getSaleId,
};
