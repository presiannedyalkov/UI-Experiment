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
  const { visualHierarchy, visualType, actionHierarchy, actionType, color, handleButtonClick, children } = props;
  return (
    <div>
      <button data-visual-hierarchy={visualHierarchy} data-visual-type={visualType} data-action-hierarchy={actionHierarchy} data-action-type={actionType} onClick={handleButtonClick} className={`btn btn-block btn-${visualType} btn-${color} ${styles.button}`}>{children}</button>
    </div>
  );
}

Button.propTypes = {
  visualType: PropTypes.string,
  visualHierarchy: PropTypes.number,
  actionType: PropTypes.string,
  actionHierarchy: PropTypes.number,
  color: PropTypes.string,
  handleButtonClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
