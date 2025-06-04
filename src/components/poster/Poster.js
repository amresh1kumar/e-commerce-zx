import React from 'react'
import "./Poster.css"
import hand_icon from "../../assets/logo/hand_icon.png"
import arrow_icon from "../../assets/logo/arrow_icon.png"
import men from "../../assets/men/m12.webp"
const Poster = () => {
   return (
      <div className='poster'>
         <div className="poster-left">
            <h2>Best Deals !  Best Prices !</h2>

            <div className="poster-hand-icon">
               <p>new</p>
               <img src={hand_icon} alt="" height="60px" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <div className="poster-latest-btn">
               <div>Latest Collection</div>
               <img src={arrow_icon} alt="" height="30px" />
            </div>
         </div>

         <div className="poster-right">
            <img src={men} alt="" height="400px" />
         </div>
      </div>
   )
}

export default Poster;