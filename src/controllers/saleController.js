const saleService = require('../services/saleService');

const addSale = async (req, res, _next) => {
  const sale = req.body;
  const result = await saleService.addSale(sale);
  return res.status(201).json(result);
};

module.exports = {
  addSale,
};
