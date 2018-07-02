/**
*
* Button Component
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Button.css';

function Button(props) {
  const { type, color, handleButtonClick, children } = props;
  return (
    <div>
      <button value={type} onClick={handleButtonClick} className={`btn btn-block btn-${type} btn-${color} ${styles.button}`}>{children}</button>
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  handleButtonClick: PropTypes.object,
  children: PropTypes.string,
};

export default Button;
