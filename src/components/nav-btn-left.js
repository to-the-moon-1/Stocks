import React from 'react';
import PropTypes from 'prop-types';

const NavBtnLeft = ({ onFirstPage, onPrevPage }) => {
  const pagesData = [
    {
      name: 'onFirstPage',
      className: 'fa fa-angle-double-left page nav-page',
      onClick: onFirstPage,
    },
    {
      name: 'onPrevPage',
      className: 'fa fa-angle-left page',
      onClick: onPrevPage,
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

NavBtnLeft.propTypes = {
  onFirstPage: PropTypes.func,
  onPrevPage: PropTypes.func,
};

NavBtnLeft.defaultProps = {
  onFirstPage: () => {},
  onPrevPage: () => {},
};

export default NavBtnLeft;
