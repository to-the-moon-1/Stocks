import React from 'react';
import PropTypes from 'prop-types';

const NavBtnLeft = ({ onFirstPage, onPrevPage }) => (
  <>
    <i
      className="fa fa-angle-double-left page nav-page"
      onClick={onFirstPage}
    />
    <i className="fa fa-angle-left page" onClick={onPrevPage} />
  </>
);

NavBtnLeft.propTypes = {
  onFirstPage: PropTypes.func,
  onPrevPage: PropTypes.func,
};

NavBtnLeft.defaultProps = {
  onFirstPage: () => {},
  onPrevPage: () => {},
};

export default NavBtnLeft;
