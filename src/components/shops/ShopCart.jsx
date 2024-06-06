import React from "react";
import { Link } from "react-router-dom";

const ShopCart = ({ shopItems, addToCart }) => {
  return (
    <>
      {shopItems.map((shopItem) => (
        <div className='box' key={shopItem.id}>
          <div className='product mtop'>
            <div className='img'>
              <span className='discount'>{shopItem.discount}% Off</span>
              <img src={shopItem.cover} alt='' />
            </div>
            <div className='product-details'>
              {/* Thêm Link vào tên sản phẩm để đi đến trang chi tiết */}
              <Link to={`/shopcart/product/${shopItem.id}`}>
                <h3>{shopItem.name}</h3>
              </Link>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='price'>
                <h4>${shopItem.price}.00 </h4>
                <button onClick={() => addToCart(shopItem)}>
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShopCart;
