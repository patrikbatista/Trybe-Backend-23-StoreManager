const { Router } = require('express');
const productController = require('../controllers/productController');

const product = Router();

product.get('/:id', productController.getId);
product.get('/', productController.getAll);
product.post('/', productController.addProduct);
product.put('/:id', productController.updateProduct);
product.delete('/:id', productController.deleteProduct);

module.exports = product;
