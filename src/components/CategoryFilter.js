import React, { useState } from "react";

function CategoryFilter({ categories, onFilter }) {
  const [isClicked, setIsClicked] = useState(0);

  const handleClick = (category, i) => {
    setIsClicked(i);
    onFilter(category);
  };
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, i) => {
        return (
          <button
            className={isClicked === i ? "selected" : ""}
            key={i}
            onClick={() => handleClick(category, i)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
