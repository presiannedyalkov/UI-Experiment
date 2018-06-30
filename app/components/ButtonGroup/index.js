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
      <Button handleButtonClick={handleButtonClick} type={hierarchy.primaryAction} color={color}>Add to cart</Button>
      <Button handleButtonClick={handleButtonClick} type={hierarchy.secondaryAction} color={color}>Add to list</Button>
      <Button handleButtonClick={handleButtonClick} type={hierarchy.tertiaryAction} color={color}>Skip</Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  hierarchy: PropTypes.array,
  buttonColor: PropTypes.string,
  handleButtonClick: PropTypes.object,
};

export default ButtonGroup;
