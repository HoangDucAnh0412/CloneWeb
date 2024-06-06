// SearchResults.js
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchResults = ({shopItems, productItems,addToCart}) => {
  const location = useLocation();
  const { searchQuery, filteredProducts } = location.state;

  const handleClick = (productId) => {
    // Kiểm tra xem sản phẩm có tồn tại trong shopItems không
    const isShopItem = shopItems.some((item) => item.id === productId);
    // Kiểm tra xem sản phẩm có tồn tại trong productItems không
    const isProductItem = productItems.some((item) => item.id === productId);

    // Nếu sản phẩm tồn tại trong shopItems, chuyển hướng đến link của shop
    if (isShopItem) {
      return `/shopcart/product/${productId}`;
    }
    // Nếu sản phẩm tồn tại trong productItems, chuyển hướng đến link của product
    else if (isProductItem) {
      return `/product/${productId}`;
    } else {
      // Nếu sản phẩm không tồn tại, chuyển hướng qua trang 404 hoặc trang khác
      return "/404";
    }
  };

  return (
    <>
    <div className='container'>
    <div className="search-results">
      {filteredProducts.map((product) => (
        <div  key={product.id}>
          <div className="product">
            <div className="img">
              <span className="discount">{product.discount}% Off</span>
              <img src={product.cover} alt={product.name} />
            </div>
            <div className="product-details">
            <Link to={handleClick(product.id)}>
                <h3>{product.name}</h3>
              </Link>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>${product.price}.00 </h4>
                <button onClick={() => addToCart(product)}>
                    <i className='fa fa-plus'></i>
                  </button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  </>
  );
};

export default SearchResults;
