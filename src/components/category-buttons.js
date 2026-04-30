import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

const createCategoryPath = (category) => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

const normalizePath = (path) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }

  return path;
};

const CategoryButtons = ({ categories }) => {
  const location = useLocation();
  const currentPath = normalizePath(location.pathname);

  return (
    <div>
      <div className="category-buttons">
        {categories.map(category => {
          const categoryPath = category === "All" ? "/blog" : `/category/${createCategoryPath(category)}`;
          const isSelected = currentPath === normalizePath(categoryPath);

          return (
            <Link 
              key={category} 
              to={categoryPath} 
              className={`category-button ${isSelected ? 'selected' : ''}`}
              aria-current={isSelected ? "page" : undefined}
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
