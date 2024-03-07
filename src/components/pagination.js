import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;

  // Update to use /page/ for pages after the first
  const nextPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const prevPage = `/page/${currentPage + 1}`;

  return (
    <div className="flex justify-between">
      <div>
        {!isLast && (
          <Link to={prevPage} rel="prev">
            ← Previous
          </Link>
        )}
      </div>
      <div>
        {!isFirst && (
          <Link to={nextPage} rel="next">
            Next →
          </Link>
        )}
      </div>

    </div>
  );
};

export default Pagination;
