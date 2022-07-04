const { Router } = require('express');
const salesController = require('../controllers/saleController');

const sale = Router();

sale.post('/', salesController.addSale);

module.exports = sale;
