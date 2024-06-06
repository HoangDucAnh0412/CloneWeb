import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Data";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./style.css";
import "../shops/style.css";

const ProductDetails2 = ({ addToCart }) => {
  const { id } = useParams();
    // Tìm sản phẩm trong dữ liệu dựa trên id
  const product = Data.productItems.find((item) => item.id === parseInt(id));
  // Trích xuất thông tin của sản phẩm từ dữ liệu
  const [mainImage, setMainImage] = useState(product ? product.cover : '');
// Xử lý sự kiện khi người dùng click vào ảnh nhỏ
  const handleClick = (image) => {
    setMainImage(image);
  };


  const { name, price, description} = product;

  return (
    <div className="product-details-3-container">
      <div className="box-3">
        <div className="product-3 mtop">
          <div className="img-3">
            <TransformWrapper>
              <TransformComponent>
                <img src={`.${mainImage}`} alt={name} />
              </TransformComponent>
            </TransformWrapper>
          </div>
          <div className="small-images-3">
            {Object.keys(product)
              .filter((key) => key.startsWith("cover"))
              .map((key, index) => (
                <img
                  key={index}
                  src={`.${product[key]}`}
                  alt={name}
                  onClick={() => handleClick(product[key])}
                />
              ))}
          </div>
        </div>
        <div className="product-details-3">
          <h2>{name}</h2>
          <h4>{description}</h4>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="price-3">
            <h4>${price}.00</h4>
          <button className="check-out" onClick={() => addToCart(product)}>
              <i className="fa fa-plus"> Add To Card</i>        
          </button>
          </div>
          </div>
      </div>
    </div>
    
  );
};

export default ProductDetails2;
