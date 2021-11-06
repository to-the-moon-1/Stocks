import React from 'react';
import PropTypes from 'prop-types';

import { pageSize } from '../consts/initial-state';

import PageNumbers from './page-numbers';
import NavBtnLeft from './nav-btn-left';
import NavBtnRight from './nav-btn-right';

const Pages = ({
  currentPage,
  financials,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPageChanged,
  onPrevPage,
  pageSize,
}) => (
  <div className="mg-top">
    <NavBtnLeft onFirstPage={onFirstPage} onPrevPage={onPrevPage} />
    <span>
      <PageNumbers
        currentPage={currentPage}
        financials={financials}
        onPageChanged={onPageChanged}
        pageSize={pageSize}
      />
    </span>
    <NavBtnRight onLastPage={onLastPage} onNextPage={onNextPage} />
  </div>
);

Pages.propTypes = {
  currentPage: PropTypes.number,
  onFirstPage: PropTypes.func,
  onLastPage: PropTypes.func,
  onNextPage: PropTypes.func,
  onPageChanged: PropTypes.func,
  onPrevPage: PropTypes.func,
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

Pages.defaultProps = {
  currentPage: 1,
  onFirstPage: () => {},
  onLastPage: () => {},
  onNextPage: () => {},
  onPageChanged: () => {},
  onPrevPage: () => {},
  pageSize,
  financials: [],
};

export default Pages;
