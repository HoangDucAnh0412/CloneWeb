import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="homeSlide contentWidth">
      <div >
        <div className="col-3">
          <Slider {...settings}>
            <div className="main-banner position-relative">
            <img
              src='/images/SlideCard/main-banner-1.jpg'
              className="img-fluid rounded-3"
              alt="main banner"
            />
              <div className="main-banner-content position-absolute">
                <h4>New Item Coming</h4>
                <h5>IPhone 16 Pro</h5>
                <p>From 16.000.000 VND</p>
                <Link to="/buy-now" className="button">
                  Buy Now
                </Link>
              </div>
            </div>
            <div className="main-banner position-relative">
              <img
                src='/images/SlideCard/main-banner.jpg'
                className="img-fluid rounded-3"
                alt="second banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>Explore Technology</h4>
                <h5>New Gadget</h5>
                <p>Latest Models Available</p>
                <Link to="/new-gadgets" className="button">
                  Buy Now
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderHome;
