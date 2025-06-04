import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/Z.png'
import cartIcon from '../../assets/logo/cart_icon.png'
import { ShopContext } from '../Context/ShopContext'

function Header() {
   const { getTotalCartItems } = useContext(ShopContext)
   const [menu, setMenu] = useState("home");

   return (
      <div className='navbar'>
         <div className='nav-logo'>
            <img src={logo} alt='logo' />
            {/* <p>ZX.in</p> */}
         </div>
         {/* <div className='category-div'> */}
            {/* <select className="category" onChange={handleSelectChange} >
               <option>All</option>
               <option>Womens</option>
               <option>Men</option>
               <option>Kids</option>
            </select>
         </div> */}
         {/* <div className='searh-box'>
            <input type='search' placeholder='zx.in' />
         </div> */}

         <ul className='nav-menu'>
            <li onClick={() => { setMenu("home") }}><Link className='header-link' to="/">Home</Link>{menu === "home" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("mens") }}><Link to="/mens">Men
            </Link>{menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("womens") }}><Link to="womens">Women
            </Link>{menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("kids") }}><Link to="kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
         </ul>

         <div className="nav-login-cart">
            <Link to="/login"> <button>Login</button></Link>
            <Link to="/cart"><img src={cartIcon} alt="" height="40px" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
         </div>
      </div>

   )
}

export default Header
