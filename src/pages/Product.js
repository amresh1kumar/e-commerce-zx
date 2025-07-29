import React, { useContext } from "react";
import { ShopContext } from "../components/Context/ShopContext";
import ProductDetail from "../components/ProductDetalis/ProductDetail";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";
import Description from "../components/Description/Description";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

function Product() {
  const { all_Product } = useContext(ShopContext);
  const { productId } = useParams();


  const product = all_Product.find((e) => e.id === parseInt(productId));

  return (
    <div>
      <ProductDetail product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
}

export default Product;
