const { Router } = require('express');
const salesController = require('../controllers/saleController');

const sale = Router();

sale.post('/', salesController.addSale);
sale.get('/:id', salesController.getSaleId);
sale.get('/', salesController.getSales);

module.exports = sale;
