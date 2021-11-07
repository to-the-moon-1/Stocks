import React from 'react';
import PropTypes from 'prop-types';

const NavBtnRight = ({ onNextPage, onLastPage }) => (
  <>
    <i className="fa fa-angle-right page" onClick={onNextPage} />
    <i
      className="fa fa-angle-double-right page nav-page"
      onClick={onLastPage}
    />
  </>
);

NavBtnRight.propTypes = {
  onNextPage: PropTypes.func,
  onLastPage: PropTypes.func,
};

NavBtnRight.defaultProps = {
  onNextPage: () => {},
  onLastPage: () => {},
};

export default NavBtnRight;
