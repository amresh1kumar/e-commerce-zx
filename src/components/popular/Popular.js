import React from 'react'
import "./Popular.css"
import Item from "../Item/Item"
import data_product from '../../assets/data'

const Popular = () => {
   return (
      <div  >
         <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className='popular-item'>
               {/* filter and map A/C to category */}
               {data_product.filter(item => item.category === 'women')
                  .map(item => {
                     return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                  })
               }
               {/* only map not filter */}
               {/* {data_product.map((item) => {
                  return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
               })} */}
            </div>
         </div>
         <div className='popular' style={{marginTop:"30px"}}>
            <h1>POPULAR IN MEN</h1>
            <hr />
            <div className='popular-item'>
               {data_product.filter((item) => item.category === 'men')
                  .map((item) => {
                     return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}
                     />
                  })

               }
            </div>
         </div>
      </div>
   )
}

export default Popular