import React from "react"
import "./style.css"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Công thức tính tổng giá tiền của các sản phẩm trong giỏ hàng
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)

  const handleCheckout = () => {
    if (CartItem.length > 0) {
      // Hiển thị thông báo đặt hàng thành công nếu có sản phẩm trong giỏ hàng
      alert("Đặt hàng thành công!")
    } else {
      // Hiển thị thông báo nếu giỏ hàng trống
      alert("Giỏ hàng của bạn đang trống!")
    }
  }

  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* Hiển thị thông báo nếu giỏ hàng trống */}
          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* Hiển thị các sản phẩm trong giỏ hàng */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      {/* Nút để xóa sản phẩm khỏi giỏ hàng */}
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* Nút để tăng/giảm số lượng của sản phẩm */}
                    <div className='cartControl d_flex'>
                      {/* Nút tăng số lượng */}
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      {/* Nút giảm số lượng */}
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>
                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          {/* Hiển thị tổng số tiền của giỏ hàng */}
          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            {/* Nút "Check Out" */}
            <button className='check-out' onClick={handleCheckout}>Check Out</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
