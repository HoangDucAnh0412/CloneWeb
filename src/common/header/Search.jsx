import React, { useState } from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import Data from "../../components/Data";
import Sdata from "../../components/shops/Sdata";
import { FaFacebook, FaFacebookMessenger, FaArrowCircleUp } from "react-icons/fa";

const Search = ({ CartItem }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  // Function to handle search query change
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredProducts = [...Data.productItems, ...Sdata.shopItems].filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    history.push("/search-results", {
      searchQuery: searchQuery,
      filteredProducts: filteredProducts,
    });
  };

  // Kéo lên trang đầu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="search-box f_flex">
          <button className="btn-search" type="submit">
            <i className="fa fa-search"></i>
          </button>
          <input
            type="text"
            placeholder="Search and hit enter..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <i></i>
        </form>
        <div className="icon f_flex width">
          <Link to="/login">
            <i className="fa fa-user icon-circle"></i>
          </Link>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="social-fixed">
        <FaFacebook className="social-fb" />
        <FaFacebookMessenger className="social-ms" />
        <FaArrowCircleUp className="social-tl" onClick={scrollToTop} />
      </div>
    </section>
  );
};

export default Search;
