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
  const hierarchy = props.hierarchy[0];
  const color = props.buttonColor;
  const handleButtonClick = props.handleButtonClick;
  return (
    <div className={styles.buttonContainer}>
      <Button handleButtonClick={handleButtonClick} type="primary" color={color}>{hierarchy.primaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} type="outline-primary" color={color}>{hierarchy.secondaryAction}</Button>
      <Button handleButtonClick={handleButtonClick} type="link" color={color}>{hierarchy.tertiaryAction}</Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  hierarchy: PropTypes.array,
  buttonColor: PropTypes.string,
  handleButtonClick: PropTypes.object,
};

export default ButtonGroup;
