import React from 'react';
import PropTypes from 'prop-types';

const PageNumbers = ({ currentPage, onPageChanged, pageNumbers }) => (
  <ul className="list-container">
    {pageNumbers.map(number => (
      <li key={number} className="list-style">
        <span
          className={currentPage === number ? 'page selected-page' : 'page'}
          id={number}
          onClick={onPageChanged}
        >
          {number}
        </span>
      </li>
    ))}
  </ul>
);

PageNumbers.propTypes = {
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func,
  pageNumbers: PropTypes.array,
};

PageNumbers.defaultProps = {
  currentPage: 1,
  onPageChanged: () => {},
  pageNumbers: [],
};

export default PageNumbers;
