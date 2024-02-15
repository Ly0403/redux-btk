const express = require('express');
const productController = require('../controllers/product');

const router = express.Router();

router.get('/', productController.getProducts);
router.post('/:id', productController.updateProduct);
router.post('/', productController.addProduct);

module.exports = router;