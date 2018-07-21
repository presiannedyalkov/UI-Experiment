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
  const { currentActionHierarchy, currentVisualHierarchy, buttonColor, handleButtonClick } = props;

  return (
    <div className={styles.buttonContainer}>
      <Button handleButtonClick={handleButtonClick} visualType={currentVisualHierarchy.primaryAction} actionType={currentActionHierarchy.primaryAction} color={buttonColor}>{currentActionHierarchy.primaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} visualType={currentVisualHierarchy.secondaryAction} actionType={currentActionHierarchy.secondaryAction} color={buttonColor}>{currentActionHierarchy.secondaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} visualType={currentVisualHierarchy.tertiaryAction} actionType={currentActionHierarchy.tertiaryAction} color={buttonColor}>{currentActionHierarchy.tertiaryAction}</Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  currentActionHierarchy: PropTypes.object,
  currentVisualHierarchy: PropTypes.object,
  buttonColor: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

export default ButtonGroup;
