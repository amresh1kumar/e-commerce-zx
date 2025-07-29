import React, { createContext, useState } from "react";
import all_Product from "../../assets/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {
   let cart = {};
   for (let index = 0; index < all_Product.length + 1; index++) {
      cart[index] = 0;
   }
   return cart;
};


const ShopContextProvider = (props) => {
   const [cartItems, setCardItems] = useState(getDefaultCart());



   const addTocart = (ItemId) => {
      setCardItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
      // console.log(cartItems);
   };

   const removeFromCart = (ItemId) => {
      setCardItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
   };

   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let iteminfo = all_Product.find(
               (product) => product.id === parseInt(item)
            );
            totalAmount += iteminfo.new_price * cartItems[item];
         }

      }
      return totalAmount;

   };

   const getTotalCartItems = () => {
      let totalItmes = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            totalItmes += cartItems[item];
         }

      }
      return totalItmes;
   }

   const contextValue = {
      all_Product,
      cartItems,
      addTocart,
      removeFromCart,
      getTotalCartAmount,
      getTotalCartItems
   };

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
};
export default ShopContextProvider;
