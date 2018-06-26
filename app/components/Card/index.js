/**
*
* Card
*
*/

// Imports
import React from 'react';

import { Card, CardTitle, CardText, Col } from 'reactstrap';
import ButtonGroup from 'components/ButtonGroup';

// Messages
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// Element
function SimpleCard() {
  return (
    <Col sm="4" className="mb-4">
      <Card body>
        <CardTitle className="text-primary">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <ButtonGroup />
      </Card>
    </Col>
  );
}

export default SimpleCard;
