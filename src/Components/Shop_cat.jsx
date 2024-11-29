import React from "react";
import { ProductModels } from "../modelData/products";
import { findImage } from "../images/imageExport"; 
import { Navigate } from "react-router-dom";  // Import Navigate to redirect

class Shop_cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], navigateTo: null };  
  }

  fetchProducts(category) {
    if (category) {
      const products = ProductModels.categoryProducts(category);
      this.setState({ products });
    } else {
      this.setState({ products: [] });
    }
  }

  componentDidMount() {
    this.fetchProducts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.fetchProducts(this.props.category);
    }
  }

  toItemInfo = (productId) => {
    this.setState({ navigateTo: `/item/${productId}` });  
  };

  render() {
    if (this.state.navigateTo) {
      return <Navigate to={this.state.navigateTo} />; 
    }

    return (
      <div className="category-shop">
        <div className="cat-item-container">
          {!this.props.category
            ? [
                <div className="category-item-shop" key="new_products">
                  Шинэ Бүтээгдэхүүн
                </div>,
                <div className="category-item-shop" key="happy_cake">
                  Аз Жаргалын Бялуу
                </div>,
                <div className="category-item-shop" key="brand_cake">
                  Брэнд Бялуу
                </div>,
                <div className="category-item-shop" key="bread">
                  Талх, Нарийн Боов
                </div>,
                <div className="category-item-shop" key="salat_sandwich">
                  Слат, Сэндвич
                </div>,
                <div className="category-item-shop" key="dessert">
                  Дессерт
                </div>,
                <div className="category-item-shop" key="drinks">
                  Уух Зүйлс
                </div>,
              ]
            : this.state.products.map((product) => (
                <div className="category-item-shop" key={product._id} onClick={() => this.toItemInfo(product._id)}>
                  <img
                    src={findImage(product.picture_path)}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="category-item-title-shop">{product.name}</div>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default Shop_cat;
