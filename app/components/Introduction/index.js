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
              <Panel.Title><h2>Participant Information</h2></Panel.Title>
            </Panel.Body>
            <Panel.Body>
              <big>
                <h4>Dear Participant,</h4>

                we are pleased, that you are interested in taking part in our brief survey on purchase decisions.
                The completion of the experiment takes an average of <strong>15 minutes.</strong><br />

                Please read the following information carefully and decide whether you are willing to contribute to our
                research project by taking part in our survey.<br /><br />

                <strong>Data protection</strong><br />
                All inquired data will be used for research purposes only and will be treated
                confidentially and anonymously. The collected data will be statistically analyzed on a group level,
                meaning that the results cannot be attributed to any single participant. All data will be saved and
                archived in accordance with the current regulations.<br /><br />

                <strong>Voluntary participation</strong><br />
                Your participation in this survey is completely voluntary. You may withdraw
                your agreement to participate in this survey at any time without giving any reasons and without
                penalty.<br /><br />

                <strong>Compensation</strong><br />
                You will not receive any compensation for taking part in this survey. There will be no
                expenses on your site other than the time it will take you to answer the survey questions.<br /><br />

                <strong>Contact</strong><br />
                In case of any further questions concerning this survey please contact <a href="mailto:experiment2018ref5mj@gmail.com">experiment2018ref5mj@gmail.com</a>.<br /><br />

                <strong>By proceeding to the following page you declare that you have read and understood all of the above
                and agree with the depicted terms and conditions.</strong>
              </big>
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

export default Introduction;
