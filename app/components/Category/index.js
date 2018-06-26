/**
*
* Category
*
*/

import React from 'react';
import { Row } from 'reactstrap';
import SimpleCard from 'components/Card';
// import styled from 'styled-components';


class Category extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Row>
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
        <SimpleCard />
      </Row>
    );
  }
}

export default Category;
