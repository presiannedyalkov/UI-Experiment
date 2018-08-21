/**
*
* Finished
*
*/

// Libraries
import React from 'react';

// Components
import { Panel, Grid, Row } from 'react-bootstrap';
import Header from 'components/Header';
import GitHub from '../../images/GitHub.png';

// Styles
import styles from './Finished.css';

function Finished() {
  return (
    <div>
      <Header />
      <Grid>
        <Row>
          <Panel className="panel">
            <Panel.Body>
              <Panel.Title><h2>UI Experiment</h2></Panel.Title>
            </Panel.Body>
            <Panel.Body className={styles.text}>
              <h4>Dear Visitor,</h4>
              The data acquisition phase of our project has been completed. We are now in the process of evaluating the data. More information
              about the project can be found here <a target="_blank" href="https://github.com/presiannedyalkov/UI-Experiment"><img alt="GitHub" src={GitHub} /></a><br /><br />

              <strong>About the experiment</strong><br />
              The questions we are trying to answer by conducting this survey are the following:<br />
              <ol>
                <li>Are people more likely to click buttons of a certain color and/or shape?</li>
                <li>Is there a specific relationship between the color and/or shape of the
                  button clicked and the subjective probability to buy an item?</li>
              </ol><br />

              <strong>Contact</strong><br />
              In case of any further questions concerning this survey or if you find a bug please
              contact <a href="mailto:info@ui-experiment.de" target="_blank">info@ui-experiment.de</a>.<br /><br />
            </Panel.Body>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

export default Finished;
