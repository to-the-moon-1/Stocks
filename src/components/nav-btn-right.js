import React from 'react';
import PropTypes from 'prop-types';

const NavBtnRight = ({ onNextPage, onLastPage }) => {
  const pagesData = [
    {
      name: 'onNextPage',
      className: 'fa fa-angle-right page',
      onClick: onNextPage,
    },
    {
      name: 'onLastPage',
      className: 'fa fa-angle-double-right page nav-page',
      onClick: onLastPage,
    },
  ];

  return (
    <>
      {pagesData.map(({ className, onClick }) => (
        <i
          key={className}
          aria-hidden="true"
          className={className}
          onClick={onClick}
        />
      ))}
    </>
  );
};

NavBtnRight.propTypes = {
  onNextPage: PropTypes.func,
  onLastPage: PropTypes.func,
};

NavBtnRight.defaultProps = {
  onNextPage: () => {},
  onLastPage: () => {},
};

export default NavBtnRight;
