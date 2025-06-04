import React, { useContext } from 'react'
import "../CSS/ShopCategory.css"
import DropdownButton from '../components/Dropdown/DropdownButton'
// import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import { ShopContext } from '../components/Context/ShopContext'

function ShopCategory(props) {
  const { all_Product } = useContext(ShopContext)

  return (
    <div className='shop-category' style={{marginTop:"100px"}}>
      {/* <img className='shopcategory-banner' src={props.banner} alt="" /> */}
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          <DropdownButton  />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_Product.map((item) => {
          if (props.category === item.category) {
            return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
