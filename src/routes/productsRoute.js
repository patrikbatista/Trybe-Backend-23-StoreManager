const { Router } = require('express');
const productController = require('../controllers/productController');

const product = Router();

product.get('/', productController.getAll);

module.exports = product;
