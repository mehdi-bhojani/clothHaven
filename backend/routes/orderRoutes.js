const express = require('express');
const router = express.Router();
const database = require('../database'); // Update the path accordingly

// View Order History Route
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await database.getOrdersByUserID(userId);

    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Place Order Route
router.post('/place-order', async (req, res) => {
  try {
    const order = req.body;
    const orderID = await database.createOrder(order);

    res.status(201).json({ message: 'Order placed successfully', orderID });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
