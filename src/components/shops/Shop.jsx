import React from "react"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className='shop background'>
          <div className='container'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Mobile Phones</h2>
              </div>
            </div>
            <div className='product-content  grid2'>
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
