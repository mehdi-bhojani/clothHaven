const express = require("express");
const router = express.Router();
const database = require("../database");

// Product Details Route
router.get("/single", async (req, res) => {
  const productId = req.query.productid;
  try {
    const product = await database.getSingleProduct(productId);
    console.log(product);
    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error: " + error.message);
  }
});

// Display All Products Route
router.get("/ProductOptions", async (req, res) => {
  try {
    const productOptions = await database.getProductOptions();
    // Group the options by ProductID
    const groupedOptions = productOptions.reduce((acc, row) => {
      const { ProductID, OptionGroupName, OptionName } = row;

      const existingProduct = acc.find(
        (product) => product.ProductID === ProductID
      );

      if (existingProduct) {
        if (!existingProduct[OptionGroupName.toLowerCase()]) {
          existingProduct[OptionGroupName.toLowerCase()] = [OptionName];
        } else {
          existingProduct[OptionGroupName.toLowerCase()].push(OptionName);
        }
      } else {
        const newProduct = {
          ProductID,
          [OptionGroupName.toLowerCase()]: [OptionName],
        };
        acc.push(newProduct);
      }

      return acc;
    }, []);
    res.send(groupedOptions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
// Display All Products Route
router.get("/", async (req, res) => {
  try {
    const products = await database.getProducts();
    console.log(products);
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Add to Cart Route
router.post("/products/:productId/add-to-cart", (req, res) => {
  // Sample code to add a product to the cart
});

module.exports = router;
