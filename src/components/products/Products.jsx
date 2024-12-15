import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import img from "../images/products.jpg"
import Back from "../common/Back"
import "../home/products/products.css"
import ProductCard from "./ProductCard"
import ProductDistress from "./ProductDistress"
import ProductFlipFarm from "./ProductFlipFarm"
import ProductSeaStation from "./ProductSeaStation"
import ProductEss from "./ProductEss"
import './products.css'

const Products = () => {
  const location = useLocation();

  console.log(location?.state)
  
  const passedProduct = location?.state?.productNo
  const [product, setProduct] = useState(passedProduct ? passedProduct:1);

  const content = () => {
    if (product == 1) {
      return <ProductDistress />
    } else if (product == 2) {
      return <ProductFlipFarm />
    } else if (product == 3) {
      return <ProductSeaStation />
    } else if (product == 4) {
      return <ProductEss />
    } else {
      return null;
    }
  }
  const component = content()

  return (
    <>
      <section className='products mb'>
        <Back name='Products' title='Products - All Products' cover={img} />
        <div className='product container'>
          <ProductCard setProduct={setProduct} />
          <div className="detail">{component}</div>
        </div>
      </section>
    </>
  )
}

export default Products
