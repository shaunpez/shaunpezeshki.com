import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const createCategoryPath = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

const CategoryButtons = ({ categories }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div>
      <div className="category-buttons">
        {categories.map(category => {
          const categoryPath = category === "All" ? "/" : `/category/${createCategoryPath(category)}`;
          const isSelected = currentPath === categoryPath;

          return (
            <Link 
              key={category} 
              to={categoryPath} 
              className={`category-button ${isSelected ? 'selected' : ''}`}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryButtons;
