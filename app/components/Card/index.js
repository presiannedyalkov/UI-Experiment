/**
*
* Card Component
*
*/

// Imports
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Col } from 'reactstrap';
import ButtonGroup from 'components/ButtonGroup';

import styles from './Card.css';

function SimpleCard(props) {
  return (
    <Col sm="6" md="4" className={`mb-4 ${styles.col}`}>
      <Card body className="text-center" dataId={props.id}>
        <div className={styles.titleContainer}>
          <CardTitle className={styles.cardTitle}>{props.text}</CardTitle>
        </div>
        <ButtonGroup buttonColor={props.buttonColor} hierarchy={props.hierarchy} page={props.page} />
      </Card>
    </Col>
  );
}

SimpleCard.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  hierarchy: PropTypes.array,
  buttonColor: PropTypes.string,
  page: PropTypes.number,
};

export default SimpleCard;
