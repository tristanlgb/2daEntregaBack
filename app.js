const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();

const productManager = new ProductManager();
productManager.readProductsFromFile();

app.get('/products', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;
  const products = productManager.getProducts(limit);
  res.send({ products });
});

app.get('/products/:pid', (req, res) => {
  const pid = req.params.pid;
  const product = productManager.getProductById(pid);
  res.send({ product });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
