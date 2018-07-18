/**
*
* ButtonGroup
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from 'components/Button';

// Styles
import styles from './ButtonGroup.css';

function ButtonGroup(props) {
  const actionHierarchy = props.actionHierarchy[0];
  const visualHierarchy = props.visualHierarchy[0];
  const color = props.buttonColor;
  const handleButtonClick = props.handleButtonClick;
  return (
    <div className={styles.buttonContainer}>
      <Button handleButtonClick={handleButtonClick} visualType={visualHierarchy.primaryAction} actionType={actionHierarchy.primaryAction} color={color}>{actionHierarchy.primaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} visualType={visualHierarchy.secondaryAction} actionType={actionHierarchy.secondaryAction} color={color}>{actionHierarchy.secondaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} visualType={visualHierarchy.tertiaryAction} actionType={actionHierarchy.tertiaryAction} color={color}>{actionHierarchy.tertiaryAction}</Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  actionHierarchy: PropTypes.array,
  visualHierarchy: PropTypes.array,
  buttonColor: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

export default ButtonGroup;
