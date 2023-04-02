class ProductManager {
  constructor() {
    this.products = [];
  }

  readProductsFromFile() {
    const fs = require('fs');
    const data = fs.readFileSync('products.json');
    this.products = JSON.parse(data);
  }


  getProducts(limit = null) {
    if (limit) {
      return this.products.slice(0, limit);
    } else {
      return this.products;
    }
  }


  getProductById(id) {
    return this.products.find(product => product.id === id);
  }
}

module.exports = ProductManager;
