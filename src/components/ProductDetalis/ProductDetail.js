import React from 'react'
import "./ProductDetail.css";
import arrow_icon from "../../assets/logo/arrow_icon.png"


const ProductDetail = (props) => {
  const { product } = props;
  return (
    <div className='ProductDetail'>
      Home <img src={arrow_icon} alt="" height="10px" /> SHOP <img src={arrow_icon} alt="" height="10px" />{product.category} <img src={arrow_icon} alt="" height="10px" /> {product.name}
    </div>
  )
}

export default ProductDetail;