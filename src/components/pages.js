import React from 'react';
import PropTypes from 'prop-types';

import { pageSize } from '../consts/initial-state';

import PageNumbers from './page-numbers';
import NavBtn from './nav-btn';

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
    <NavBtn nav="first" onEnd={onFirstPage} onStep={onPrevPage} side="left" />
    <PageNumbers
      currentPage={currentPage}
      financials={financials}
      onPageChanged={onPageChanged}
      pageSize={pageSize}
    />
    <NavBtn nav="last" onEnd={onLastPage} onStep={onNextPage} side="right" />
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
