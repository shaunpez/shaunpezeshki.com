import React from 'react';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;

  // Update to use /page/ for pages after the first
  const nextPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`;
  const prevPage = `/page/${currentPage + 1}`;

  return (
    <div className="pagination">
        {!isLast ? (
          <Link to={prevPage} className="prev" rel="prev">
            Previous
          </Link>
        ) : (
          <span className="prev text-gray-300">
            Previous
          </span>
        )}
        {!isFirst ? (
          <Link to={nextPage} className="next" rel="next">
            Next
          </Link>
        ) : (
          <span className="next text-gray-300">
            Next
          </span>
        )}

    </div>
  );
};

export default Pagination;
