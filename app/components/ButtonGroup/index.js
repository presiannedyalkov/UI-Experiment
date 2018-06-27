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
  return (
    <div>
      <Button type={hierarchy.primaryAction} color="blue">Add to cart</Button>
      <Button type={hierarchy.secondaryAction} color="blue">Add to list</Button>
      <Button type={hierarchy.tertiaryAction} color="blue">Skip</Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  hierarchy: PropTypes.array,
};

export default ButtonGroup;
