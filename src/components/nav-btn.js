import React from 'react';
import PropTypes from 'prop-types';

const NavBtn = ({ nav, onStep, onEnd, side }) => {
  const onStepClass = side => `fa fa-angle-${side} page`;
  const onEndClass = side => `fa fa-angle-double-${side} page nav-page`;

  return (
    <>
      {side === 'right' && nav === 'last' && (
        <>
          <i className={onStepClass(side)} onClick={onStep} />
          <i className={onEndClass(side)} onClick={onEnd} />
        </>
      )}
      {side === 'left' && nav === 'first' && (
        <>
          <i className={onEndClass(side)} onClick={onEnd} />
          <i className={onStepClass(side)} onClick={onStep} />
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
