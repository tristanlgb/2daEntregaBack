class ProductManager {
  constructor() {
    this.products = [];
  }

  // Function to read the products from file (assuming the file is called 'products.json')
  readProductsFromFile() {
    const fs = require('fs');
    const data = fs.readFileSync('products.json');
    this.products = JSON.parse(data);
  }

  // Function to get all products
  getProducts(limit = null) {
    if (limit) {
      return this.products.slice(0, limit);
    } else {
      return this.products;
    }
  }

  // Function to get a specific product by ID
  getProductById(id) {
    return this.products.find(product => product.id === id);
  }
}

module.exports = ProductManager;
