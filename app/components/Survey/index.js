/**
*
* Survey
*
*/

// Libraries
import React from 'react';

// Components
import { Grid, Row, Button, Panel } from 'react-bootstrap';
import Header from 'components/Header';

// Styles
import styles from './Survey.css';

function Survey() {
  return (
    <div>
      <Header />
      <Grid className={styles.grid}>
        <Row>
          <Panel className={styles.panel}>
            <Panel.Body>
              <Panel.Title><h2>Survey</h2></Panel.Title>
            </Panel.Body>
            <Panel.Body>
              This is the survey.
            </Panel.Body>
            <div className="clearfix">
              <Button className={`btn-primary pull-right ${styles.button}`} href="/thankyou">Finish</Button>
            </div>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

Survey.propTypes = {

};

export default Survey;
