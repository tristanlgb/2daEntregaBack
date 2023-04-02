const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const productManager = new ProductManager();
productManager.readProductsFromFile();

app.get('/products', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  const products = productManager.getProducts(limit);
  res.json(products);
});


app.get('/products/:pid', (req, res) => {
  const pid = req.params.pid;
  const product = productManager.getProductById(pid);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
