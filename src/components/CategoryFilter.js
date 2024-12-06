import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  console.log("Rendering CategoryFilter with categories: ", categories);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => {
            console.log("Category button clicked: ", category);
            setSelectedCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
