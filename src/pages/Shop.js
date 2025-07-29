import React from 'react'
// import Poster from '../components/poster/Poster'
import Popular from '../components/popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';
import Newsletter from '../components/NewsLetter/Newsletter';
import Carousel from '../components/Carousel/Carousel'


function Shop() {
   return (
      <div>
         {/* <Poster /> */}
         <Carousel />
         <Popular />
         <Offers />
         <NewCollections />
         <Newsletter />
      </div>
   )
}

export default Shop;
