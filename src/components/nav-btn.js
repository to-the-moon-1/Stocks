import React from 'react';
import PropTypes from 'prop-types';

const NavBtn = ({ nav, onStep, onEnd, side }) => {
  const classStep = side => `fa fa-angle-${side} page`;
  const classEnd = side => `fa fa-angle-double-${side} page nav-page`;

  return (
    <>
      {side === 'right' && nav === 'last' && (
        <>
          <i className={classStep(side)} onClick={onStep} />
          <i className={classEnd(side)} onClick={onEnd} />
        </>
      )}
      {side === 'left' && nav === 'first' && (
        <>
          <i className={classEnd(side)} onClick={onEnd} />
          <i className={classStep(side)} onClick={onStep} />
        </>
      )}
    </>
  );
};

NavBtn.propTypes = {
  onStep: PropTypes.func,
  onEnd: PropTypes.func,
  nav: PropTypes.string,
  side: PropTypes.string,
};

NavBtn.defaultProps = {
  onStep: () => {},
  onEnd: () => {},
  nav: '',
  side: '',
};

export default NavBtn;
