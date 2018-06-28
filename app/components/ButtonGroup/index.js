/**
*
* ButtonGroup
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

function ButtonGroup(props) { // eslint-disable-line react/prefer-stateless-function
  const hierarchy = props.hierarchy[0];
  const color = props.buttonColor;
  return (
    <div>
      <Button type={hierarchy.primaryAction} color={color}>Add to cart</Button>
      <Button type={hierarchy.secondaryAction} color={color}>Add to list</Button>
      <Button type={hierarchy.tertiaryAction} color={color}>Skip</Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  hierarchy: PropTypes.array,
  buttonColor: PropTypes.string,
};

export default ButtonGroup;
