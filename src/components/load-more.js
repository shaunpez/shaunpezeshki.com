import React from 'react';

const Pagination = ({ hasMore, handleLoadMore }) => {
  return (
    hasMore && (
      <div className="pagination-load">
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      </div>
    )
  );
};

export default Pagination;