import React from 'react';
import Data from "../products.json";

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5> {/* Fixed the text */}
      </div>
      <div>
        {/* All categories button */}
        <button
          onClick={() => setProducts(Data)}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        
        {/* Map through menuItems and render category buttons */}
        {menuItems.map((Val, id) => (
          <button
            className={`m-2 ${selectedCategory === Val ? "bg-warning" : ""}`} // Highlight selected category
            key={id}
            onClick={() => filterItem(Val)} // Call filterItem with Val
          >
            {Val}
          </button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
