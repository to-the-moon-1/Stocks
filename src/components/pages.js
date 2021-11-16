import React from 'react';
import PropTypes from 'prop-types';

import PageNumbers from './page-numbers';
import NavBtn from './nav-btn';

const Pages = ({
  currentPage,
  onFirstPage,
  onLastPage,
  onNextPage,
  onPageChanged,
  onPrevPage,
  pageNumbers,
}) => (
  <div className="mg-top">
    <NavBtn nav="first" onEnd={onFirstPage} onStep={onPrevPage} side="left" />
    <PageNumbers
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      pageNumbers={pageNumbers}
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
  pageNumbers: PropTypes.array,
};

Pages.defaultProps = {
  currentPage: 1,
  onFirstPage: () => {},
  onLastPage: () => {},
  onNextPage: () => {},
  onPageChanged: () => {},
  onPrevPage: () => {},
  pageNumbers: [],
};

export default Pages;
