/**
*
* NsThankYou stands for not sent Thank You
* exists for GA tracking purposes, to measure exit pages correctly
*
*/

// Libraries
import React from 'react';

// Components
import { Grid, Panel, Row } from 'react-bootstrap';
import Header from 'components/Header';

function NsThankYou() {
  return (
    <div>
      <Header />
      <Grid>
        <Row>
          <Panel className="panel">
            <Panel.Body>
              <Panel.Title><h2>Final words</h2></Panel.Title>
            </Panel.Body>
            <Panel.Body>
              <h4>Dear Participant,</h4>
              you have reached the end of our survey. You may close the window now.
              Thank you for being part of our research project!<br /><br />

              <strong>About the experiment</strong><br />
              The questions we are trying to answer by conducting this survey are the following:<br />
              <ol>
                <li>Are people more likely to click buttons of a certain color and/or shape?</li>
                <li>Is there a specific relationship between the color and/or shape of the
                  button clicked and the subjective probability to buy an item?</li>
              </ol><br />

              <strong>Contact</strong><br />
              In case of any further questions concerning this survey or if you found a bug please contact <a href="mailto:info@ui-experiment.koeln">
              info@ui-experiment.koeln</a>.<br /><br />
            </Panel.Body>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

export default NsThankYou;
