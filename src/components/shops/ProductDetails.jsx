import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sdata from "./Sdata";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"; // Import các thành phần cần thiết từ thư viện
import "./style.css"; // Import file CSS mới

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  // Tìm sản phẩm trong dữ liệu dựa trên id
  const product = Sdata.shopItems.find((item) => item.id === parseInt(id));
  // Trích xuất thông tin của sản phẩm từ dữ liệu
  const { name, price, des } = product;
    // State để lưu trữ đường dẫn của ảnh chính
  const [mainImage, setMainImage] = useState(product.cover);
// Xử lý sự kiện khi người dùng click vào ảnh nhỏ
  const handleClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="product-details-3-container">
      <div className="box-3">
        <div className="product-3 mtop">
          <div className="img-3">
            {/* Sử dụng TransformWrapper và TransformComponent để tạo khả năng zoom */}
            <TransformWrapper>
              <TransformComponent>
                <img src={`/${mainImage}`} alt={name} />
              </TransformComponent>
            </TransformWrapper>
          </div>
          <div className="small-images-3">
            {/* Hiển thị các ảnh nhỏ */}
            {Object.keys(product)
              .filter((key) => key.startsWith("cover"))
              .map((key, index) => (
                <img
                  key={index}
                  src={`/${product[key]}`}
                  alt={name}
                  onClick={() => handleClick(product[key])}
                />
              ))}
          </div>
        </div>
        <div className="product-details-3">
          <h3>{name}</h3>
          <h4>{des} </h4>
          <div className="rate">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="price-3">
            <h4>${price}.00 </h4>
            <button className="check-out" onClick={() => addToCart(product)}>
              <i className="fa fa-plus"> Add To Card</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
