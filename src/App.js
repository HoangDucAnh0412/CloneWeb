import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import ProductDetails from "./components/shops/ProductDetails"
import ProductDetails2 from "./components/flashDeals/ProductDetails2"
import LoginPage from "./common/header/LoginPage" 
import Search from "./common/header/Search";
import SearchResults from "./common/header/SearchResults"; // Import SearchResults

// import ShopCart from "./components/shops/ShopCart";
function App() {
  // Lấy dữ liệu từ Data
  const { productItems } = Data
  const { shopItems } = Sdata

  // Khởi tạo state để lưu giữ thông tin sản phẩm trong giỏ hàng
  const [CartItem, setCartItem] = useState([])

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const productExit = CartItem.find((item) => item.id === product.id)
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
    // Ngược lại, thêm sản phẩm mới vào giỏ hàng với số lượng là 1
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Hàm giảm số lượng của sản phẩm trong giỏ hàng
  const decreaseQty = (product) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const productExit = CartItem.find((item) => item.id === product.id)

    // Nếu sản phẩm tồn tại và số lượng bằng 1, xoá sản phẩm khỏi giỏ hàng
    // Ngược lại, giảm số lượng của sản phẩm đi 1
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        {/* Header component với thông tin giỏ hàng */}
        <Header CartItem={CartItem} />
        <Switch>
          <Route path="/login" component={LoginPage} />
          {/* Route cho trang chính */}
          <Route path='/' exact>
            {/* Truyền dữ liệu sản phẩm và hàm thêm sản phẩm vào giỏ hàng vào Pages component */}
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          {/* Route cho trang giỏ hàng */}
          <Route path='/cart' exact>
            {/* Truyền thông tin giỏ hàng và các hàm thao tác giỏ hàng vào Cart component */}
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>

          <Route path="/shopcart/product/:id" exact>
          <ProductDetails shopItems={shopItems}  addToCart={addToCart} decreaseQty={decreaseQty}  />
          </Route>
          <Route path="/product/:id" exact>
          <ProductDetails2 productItems={productItems} addToCart={addToCart} decreaseQty={decreaseQty}  />
          </Route>
          <Route path="/search-results" exact>
            <SearchResults shopItems={shopItems} productItems={productItems} addToCart={addToCart} />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
