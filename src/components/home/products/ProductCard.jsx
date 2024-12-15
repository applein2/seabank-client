import React from "react"
import { products } from "../../data/Data"
import { useNavigate } from "react-router-dom"

const ProductCard = () => {
  const navigate = useNavigate();
  
  const showProduct = (id) => {
    navigate('/products', {state: {productNo: id}})  
  }

  return (
    <>
      <div className='content grid4 mtop'>
        {products.map((item, index) => (
          <div className='box' key={index} onClick={()=> showProduct(item.id)}>
              <div className="box-container">
                <img src={item.cover} alt='' />
              </div>
              <h4>{item.name}</h4>
              <label>{item.desc}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductCard
