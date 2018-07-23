/**
*
* ThankYou
*
*/

// Libraries
import React from 'react';

// Components
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

function ThankYou() {
  return (
    <Panel className="panel">
      <Panel.Body>
        <Panel.Title><h2>Final words</h2></Panel.Title>
      </Panel.Body>
      <Panel.Body>
        <h4>Dear Participant,</h4>
        you have reached the end of our survey. Your data has been sent.
        You may close the window now. Thank you for being part of our research project!<br /><br />

        <strong>About the experiment</strong><br />
        The questions we are trying to answer by conducting this survey are the following:<br />
        <ol>
          <li>Are people more likely to click buttons of a certain color and/or shape?</li>
          <li>Is there a specific relationship between the color and/or shape of the
            button clicked and the subjective probability to buy an item?</li>
        </ol><br />

        <strong>Contact</strong><br />
        In case of any further questions concerning this survey please contact <a href="mailto:info@ui-experiment.koeln">
        info@ui-experiment.koeln</a>.<br /><br />
        If you would like to receive the final results and/or view more documentation
        about the project, please fill out the form and click send. We
        will contact you in a couple of weeks when the experiment is concluded.<br /><br />

        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>{' '}
            <FormControl type="text" placeholder="J. Doe" />
          </FormGroup>{' '}
          <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>{' '}
            <FormControl type="email" placeholder="j.doe@example.com" />
          </FormGroup>{' '}
          <Button type="submit">Send</Button>
        </Form>
      </Panel.Body>
    </Panel>
  );
}

export default ThankYou;
