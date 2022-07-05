const saleService = require('../services/saleService');
const productService = require('../services/productService');
const saleSchemas = require('../schemas/saleSchemas');

const addSale = async (req, res, _next) => {
  const sale = req.body;
  if (!sale) return res.status(400).json({ message: 'sales is require' });

  saleSchemas.salesValidate(sale);
  await Promise.all(sale.map((element) => productService.getId(element.productId)));
  const result = await saleService.addSale(sale);
  return res.status(201).json(result);
};

const getSales = async (req, res) => {
  const sales = await saleService.getSales();
  res.status(200).json(sales);
};

const getSaleId = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getSaleId(id);
  res.status(200).json(sale);
};

module.exports = {
  addSale,
  getSales,
  getSaleId,
};
