import React from "react"
import { products } from "../data/Data"

const ProductCard = ({setProduct}) => {
  return (
    <>
      <div className='content grid4 mtop'>
        {products.map((items, index) => (
          <div className='box' key={index} onClick={() => setProduct(index + 1)}>
            {/* <div className="box-container">
              <img src={items.cover} alt='' />
            </div> */}
            <h2>{items.name}</h2>
            <label>{items.desc}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductCard
