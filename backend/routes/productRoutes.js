const express = require('express');
const router = express.Router();

// Display All Products Route
router.get('/products', (req, res) => {
  // Sample code to fetch and display products
});

// Product Details Route
router.get('/products/:productId', (req, res) => {
  // Sample code to fetch and display product details
});

// Add to Cart Route
router.post('/products/:productId/add-to-cart', (req, res) => {
  // Sample code to add a product to the cart
});

module.exports = router;
