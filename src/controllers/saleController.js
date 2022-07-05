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

module.exports = {
  addSale,
};
