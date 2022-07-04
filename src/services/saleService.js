const saleModel = require('../models/salesModel');

const addSale = async (arraySales) => {
  const idSale = await saleModel.postNewSale;
  const mapedSale = arraySales.map((element) => [idSale, element.product_id, element.quantity]);
  await saleModel.postSales(mapedSale);
  const sale = {
    id: idSale,
    itemsSold: arraySales,
  };

  return sale;
};

module.exports = {
  addSale,
};
