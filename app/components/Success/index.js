/**
*
* Success Component
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Grid, Row, Panel } from 'react-bootstrap';

// Styles
import styles from './Success.css';

function Success(props) {
  const visibilityStyle = { visibility: props.visibility };

  return (
    <div>
      <Grid className={styles.grid} style={visibilityStyle}>
        <Row>
          <Panel className={styles.panel}>
            <Panel.Body className={styles.panelBody}>
              <i className={`${styles.fontAwesome} fa fa-check-circle`}></i> Data has been saved!
            </Panel.Body>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

Success.propTypes = {
  visibility: PropTypes.string,
};

export default Success;
