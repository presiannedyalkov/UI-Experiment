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
  const { visualType, actionType, color, handleButtonClick, children } = props;
  return (
    <div>
      <button data-visual-type={visualType} data-action-type={actionType} onClick={handleButtonClick} className={`btn btn-block btn-${visualType} btn-${color} ${styles.button}`}>{children}</button>
    </div>
  );
}

Button.propTypes = {
  visualType: PropTypes.string,
  actionType: PropTypes.string,
  color: PropTypes.string,
  handleButtonClick: PropTypes.object,
  children: PropTypes.string,
};

export default Button;
