import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/Zx.png'
import cartIcon from '../../assets/logo/cart_icon.png'
import { ShopContext } from '../Context/ShopContext'
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";



function Navbar() {
   const { getTotalCartItems } = useContext(ShopContext)
   const [menu, setMenu] = useState("home");

   return (
      <div className='navbar'>
         <div className='nav-logo'>
            <img src={logo} alt='logo' />
            {/* <p>ZX.in</p> */}
         </div>
         <ul className='nav-menu'>
            <li onClick={() => { setMenu("home") }}><Link className='header-link' to="/">Home</Link>{menu === "home" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("mens") }}><Link to="/mens">Men
            </Link>{menu === "mens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("womens") }}><Link to="womens">Women
            </Link>{menu === "womens" ? <hr /> : <></>}</li>
            <li onClick={() => { setMenu("kids") }}><Link to="kids">Babies & Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
         </ul>

         <div className="nav-login-cart">
            <div className='serach-box'>
               <input type='search' placeholder='search items.....' />
               <IoSearchOutline />
            </div>
            <Link to="/login"> <CgProfile style={{ fontSize: '1.8rem', color: '#626262' }} /> </Link>
            <Link to="/cart"><img src={cartIcon} alt="" height="40px" /></Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
         </div>
      </div>

   )
}

export default Navbar;
