import React, { Component } from "react";
import Product from "../product/product";
import ProductService from "../../services/productService";

import "./catalog.css";

class Catalog extends Component {
  state = {
    products: [],
    categories: [],
    selectedCategory: "",
  };

  render() {
    var prodsToDisplay = this.state.products;

    //filter if there is a selected category
    if (this.state.selectedCategory !== "") {
      prodsToDisplay = prodsToDisplay.filter(
        (p) => p.category === this.state.selectedCategory
      );
    }

    return (
      <div className="catalog-page">
        <div className="categories">
          <div className="btn-category" onClick={() => this.setCategory("")}>
            All Products
          </div>

          {this.state.categories.map((cat) => (
            <div
              key={cat}
              className="btn-category"
              onClick={() => this.setCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        <div className="products">
          {prodsToDisplay.map((p) => (
            <Product key={p.id} data={p}></Product>
          ))}
        </div>
      </div>
    );
  }

  setCategory = (cat) => {
    this.setState({ selectedCategory: cat });
  };

  // component was rendered
  // call the service to get data
  componentDidMount() {
    let service = new ProductService();
    const data = service.getProducts();

    // identify unique categories
    let categories = [];

    for (let i = 0; i < data.length; i++) {
      var product = data[i];

      // to check if an el exists in an array: indexOf(old way); includes(new way)
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    }

    this.setState({ products: data, categories: categories });
  }
}

export default Catalog;
