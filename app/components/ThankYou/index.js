/**
*
* ThankYou
*
*/

// Libraries
import React from 'react';

// Components
import { Grid, Row, Panel } from 'react-bootstrap';
import Header from 'components/Header';

// Styles
import styles from './ThankYou.css';

function ThankYou() {
  return (
    <div>
      <Header />
      <Grid className={styles.grid}>
        <Row>
          <Panel className={styles.panel}>
            <Panel.Body>
              <Panel.Title><h2>Final words</h2></Panel.Title>
            </Panel.Body>
            <Panel.Body>
              <h4>Dear Participant,</h4>

              thank you very much for participating in our experiment!<br /><br />

              <strong>About the experiment</strong><br />
              This experiment is an implication of the research questions <strong>
              &quot;Do differently colored buttons produce different conversion?&quot;</strong> and <strong>
              &quot;Is there a difference between colored buttons and simple text links?&quot;</strong> If
              you would like to receive the final results and/or view more documentation
              about the project, please fill out the form and click send. We
              will contact you in a couple of weeks when the experiment is concluded.<br /><br />

              <strong>Contact</strong><br />
              In case of any further questions concerning this survey please contact <a href="mailto:experiment2018ref5mj@gmail.com">experiment2018ref5mj@gmail.com</a>.<br /><br />

            </Panel.Body>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

export default ThankYou;
