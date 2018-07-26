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
  const { currentVisualHierarchy, currentActionHierarchy, buttonColor, handleButtonClick } = props;

  return (
    <div className={styles.buttonContainer}>
      <Button handleButtonClick={handleButtonClick} visualHierarchy={currentVisualHierarchy.id} visualType={currentVisualHierarchy.primaryAction} actionHierarchy={currentActionHierarchy.id} actionType={currentActionHierarchy.primaryAction} color={buttonColor}>{currentActionHierarchy.primaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} visualHierarchy={currentVisualHierarchy.id} visualType={currentVisualHierarchy.secondaryAction} actionHierarchy={currentActionHierarchy.id} actionType={currentActionHierarchy.secondaryAction} color={buttonColor}>{currentActionHierarchy.secondaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} visualHierarchy={currentVisualHierarchy.id} visualType={currentVisualHierarchy.tertiaryAction} actionHierarchy={currentActionHierarchy.id} actionType={currentActionHierarchy.tertiaryAction} color={buttonColor}>{currentActionHierarchy.tertiaryAction}</Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  currentVisualHierarchy: PropTypes.object,
  currentActionHierarchy: PropTypes.object,
  buttonColor: PropTypes.string,
  handleButtonClick: PropTypes.func,
};

export default ButtonGroup;
