/**
*
* Card
*
*/

// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import ButtonGroup from 'components/ButtonGroup';

function SimpleCard(props) {
  return (
    <Col sm="4" className="mb-4">
      <Card body className="text-center">
        <CardTitle className="mb-5">{props.text}</CardTitle>
        <CardText>Item id: {props.id}</CardText>
        <ButtonGroup hierarchy={props.hierarchy} page={props.page} />
      </Card>
    </Col>
  );
}

SimpleCard.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  hierarchy: PropTypes.array,
  page: PropTypes.number,
};

export default SimpleCard;
