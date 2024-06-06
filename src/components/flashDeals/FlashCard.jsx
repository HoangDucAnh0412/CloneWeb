import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";

// Mũi tên qua phải
const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}

// Mũi tên qua trái
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

// Component FlashCard hiển thị sản phẩm
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)

  // Cài đặt cho Slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((product) => (
          <div className='box' key={product.id}>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{product.discount}% Off</span>
                <img src={product.cover} alt='' />
              </div>
              <div className='product-details'>
                {/* Sử dụng Link để chuyển hướng sang ProductDetails */}
                <Link to={`/product/${product.id}`}>
                  <h3>{product.name}</h3>
                </Link>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${product.price}.00</h4>
                  <button onClick={() => addToCart(product)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default FlashCard
