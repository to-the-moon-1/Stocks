import React from 'react';
import PropTypes from 'prop-types';

import { pageSize } from '../consts/initial-state';

const PageNumbers = ({ currentPage, onPageChanged, pageSize, financials }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(financials.length / pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
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
};

PageNumbers.propTypes = {
  currentPage: PropTypes.number,
  onPageChanged: PropTypes.func,
  pageSize: PropTypes.number,
  financials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      reportDate: PropTypes.string,
      totalAssets: PropTypes.number,
      totalCash: PropTypes.number,
      totalDebt: PropTypes.number,
    }),
  ),
};

PageNumbers.defaultProps = {
  currentPage: 1,
  onPageChanged: () => {},
  pageSize,
  financials: [],
};

export default PageNumbers;
