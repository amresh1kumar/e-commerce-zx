import React, { useContext, useState, useEffect } from 'react';
import "../CSS/ShopCategory.css";
import DropdownIcon from '../components/Dropdown/DropdownButton';
import Item from '../components/Item/Item';
import { ShopContext } from '../components/Context/ShopContext';

function ShopCategory(props) {
  const { all_Product } = useContext(ShopContext);
  const [sortedProducts, setSortedProducts] = useState([]);

  // Initial filter by category
  useEffect(() => {
    const filtered = props.category
      ? all_Product.filter(item => item.category === props.category)
      : all_Product;

    setSortedProducts(filtered);
  }, [props.category, all_Product]);

  const handleSort = (key) => {
    let sorted = [...sortedProducts];

    if (key === '1') {
      sorted.sort((a, b) => a.new_price - b.new_price); // Low to High
    } else if (key === '2') {
      sorted.sort((a, b) => b.new_price - a.new_price); // High to Low
    }

    setSortedProducts(sorted);
  };

  const total = sortedProducts.length;

  return (
    <div className='shop-category' style={{ marginTop: "100px" }}>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1 - {total}</span> Product{total !== 1 ? 's' : ''}
        </p>
        <div className='shopcategory-sort'>
          <DropdownIcon onSort={handleSort} />
        </div>
      </div>

      <div className="shopcategory-products">
        {sortedProducts.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
