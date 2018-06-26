/**
*
* ButtonGroup
*
*/

import React from 'react';
import Button from 'components/Button';
// import styled from 'styled-components';

function ButtonGroup() {
  return (
    <div>
      <Button type="primary" color="blue">Add to cart</Button>
      <Button type="outline-primary" color="blue">Add to list</Button>
      <Button type="link" color="blue">Skip</Button>
    </div>
  );
}

export default ButtonGroup;
