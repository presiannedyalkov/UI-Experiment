/**
*
* Introduction
*
*/

// Libraries
import React from 'react';

// Components
import { Grid, Row, Button, Panel } from 'react-bootstrap';
import Header from 'components/Header';

// Texts
import { FormattedMessage } from 'react-intl';
import messages from './messages';

// Styles
import styles from './Introduction.css';

function Introduction() {
  return (
    <div>
      <Header />
      <Grid className={styles.grid}>
        <Row>
          <Panel className={styles.panel}>
            <Panel.Body>
              <Panel.Title><h2><FormattedMessage {...messages.headline} /></h2></Panel.Title>
            </Panel.Body>
            <Panel.Body>
              <FormattedMessage {...messages.body} />
            </Panel.Body>
            <div className="clearfix">
              <Button className={`btn-primary pull-right ${styles.button}`} href="/experiment">Continue</Button>
            </div>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

Introduction.propTypes = {

};

export default Introduction;
