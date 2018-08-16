/**
*
* ThankYou
* merge with nsThankYou and attach URL parameter to the later to distinguish both in google analytics
*
*/

// Libraries
import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

// Components
import { Panel, Grid, Row } from 'react-bootstrap';
import Header from 'components/Header';
import EmailForm from 'components/EmailForm';

const cookies = new Cookies();

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
      news: true,
      participated: false,
      subscribed: false,
    };
    this.handleEmailSubscription = this.handleEmailSubscription.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Lifecycles methods
   */
  // This checks for set cookies
  componentWillMount() {
    this.setState({
      participated: cookies.get('participated') || this.state.participated,
      subscribed: cookies.get('subscribed') || this.state.subscribed,
    });
  }
  // This handles the form validation
  componentDidUpdate() {
    const { name, nameIsValid, email, emailIsValid, buttonIsClicked, sent, news } = this.state;
    if (nameIsValid && emailIsValid && buttonIsClicked && !sent) {
      axios.post('https://sessions-express-server-2.herokuapp.com/api/mail', { name, email, news })
        .then(() => {
          this.setState({ status: 'sent', sent: true });
        })
        .catch(() => {
          this.setState({ status: 'error', sent: true });
        });
      cookies.set('subscribed', 'true', { path: '/' });
    }
  }

  handleEmailSubscription() {
    const { name, email } = this.state;

    cookies.set('subscribed', 'true', { path: '/' });

    this.setState({ buttonIsClicked: true });

    // check if its a name
    const nameCheck = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const validName = nameCheck.test(name);
    if (name && validName) {
      this.setState({ nameIsValid: true });
    } else {
      this.setState({ nameIsValid: false });
    }

    // check if its a valid email
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
    const checked = event.currentTarget.checked;
    if (currentField === 'name') {
      this.setState({ name: value });
    } else if (currentField === 'email') {
      this.setState({ email: value });
    } else if (currentField === 'news') {
      this.setState({ news: checked });
    }
  }

  render() {
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
                you have reached the end of our survey. You may now close the window. Thank you
                for being part of our research project!<br /><br />

                <strong>About the experiment</strong><br />
                The questions we are trying to answer by conducting this survey are the following:<br />
                <ol>
                  <li>Are people more likely to click buttons of a certain color and/or shape?</li>
                  <li>Is there a specific relationship between the color and/or shape of the
                    button clicked and the subjective probability to buy an item?</li>
                </ol><br />

                <strong>Contact</strong><br />
                In case of any further questions concerning this survey or if you find a bug please
                contact <a href="mailto:info@ui-experiment.de" target="_blank">info@ui-experiment.de</a>. We will convert
                your feedback into GitHub issues and your questions into a Q&A section.<br /><br />

                <strong>Updates</strong><br />
                If you would like to receive the final results and/or view more documentation
                about the project, please fill out the form and click send. We
                will contact you in a couple of weeks when the experiment is concluded.<br /><br />

                <strong>Amazon Gift card</strong><br />
                To join in the lottery for the two Amazon Gift Cards, each amounting to 10 Euro, please add your name and email in the form as well.
                If you don&apos;t want to receive news and updates about the project, uncheck the box.<br /><br />

                {this.state.participated && !this.state.subscribed ?
                  <EmailForm {...this.state} handleChange={this.handleChange} handleEmailSubscription={this.handleEmailSubscription} /> :
                  'You have already participated!'
                }
              </Panel.Body>
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ThankYou;
