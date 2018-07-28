/**
*
* ThankYou
*
*/

// Libraries
import React from 'react';
import axios from 'axios';

// Components
import { Panel, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class ThankYou extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      nameIsValid: false,
      email: '',
      emailIsValid: false,
      buttonIsClicked: false,
      status: '',
      sent: false,
    };
    this.handleEmailSubscription = this.handleEmailSubscription.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    const { name, nameIsValid, email, emailIsValid, buttonIsClicked, sent } = this.state;
    if (nameIsValid && emailIsValid && buttonIsClicked && !sent) {
      axios.post('https://session-express-server.herokuapp.com/api/mail', { name, email })
        .then(() => {
          this.setState({ status: 'sent', sent: true });
        })
        .catch(() => {
          this.setState({ status: 'error', sent: true });
        });
    }
  }

  handleEmailSubscription() {
    const { name, email } = this.state;

    this.setState({ buttonIsClicked: true });

    // check if its a name
    const nameCheck = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const validName = nameCheck.test(name);
    if (name && validName) {
      this.setState({ nameIsValid: true });
    } else {
      this.setState({ nameIsValid: false });
    }

    const emailCheck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailCheck.test(email);
    if (email && validEmail) {
      this.setState({ emailIsValid: true });
    } else {
      this.setState({ emailIsValid: false });
    }
  }

  handleChange(event) {
    const currentField = event.target.name;
    const value = event.target.value;
    if (currentField === 'name') {
      this.setState({ name: value });
    } else if (currentField === 'email') {
      this.setState({ email: value });
    }
  }

  render() {
    const { name, nameIsValid, email, emailIsValid, buttonIsClicked, sent } = this.state;
    return (
      <Panel className="panel">
        <Panel.Body>
          <Panel.Title><h2>Final words</h2></Panel.Title>
        </Panel.Body>
        <Panel.Body>
          <h4>Dear Participant,</h4>
          you have reached the end of our survey. Please wait untill the data is sent.
          You may then close the window. Thank you for being part of our research project!<br /><br />

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
          If you would like to receive the final results and/or view more documentation
          about the project, please fill out the form and click send. We
          will contact you in a couple of weeks when the experiment is concluded.<br /><br />

          <Form inline className={sent ? 'hidden' : ''}>
            <FormGroup validationState={(!nameIsValid && buttonIsClicked) ? 'error' : null}>
              <ControlLabel>Name</ControlLabel>{' '}
              <FormControl name="name" id="name" type="text" placeholder="J. Doe" value={name} onChange={this.handleChange} />
            </FormGroup>{' '}
            <FormGroup validationState={(!emailIsValid && buttonIsClicked) ? 'error' : null}>
              <ControlLabel>Email</ControlLabel>{' '}
              <FormControl name="email" id="email" type="email" placeholder="j.doe@example.com" value={email} onChange={this.handleChange} />
            </FormGroup>{' '}
            <Button onClick={this.handleEmailSubscription}>Send</Button>
          </Form>
        </Panel.Body>
      </Panel>
    );
  }
}

export default ThankYou;
