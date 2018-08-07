/**
*
* EmailForm
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, ControlLabel, Form, FormControl, FormGroup, Checkbox } from 'react-bootstrap';


function EmailForm(props) {
  const { sent, name, nameIsValid, email, emailIsValid, buttonIsClicked, news, handleChange, handleEmailSubscription } = props;
  return (
    <Form inline className={sent ? 'hidden' : ''}>
      <FormGroup validationState={(!nameIsValid && buttonIsClicked) ? 'error' : null}>
        <ControlLabel>Name</ControlLabel>{' '}
        <FormControl name="name" id="name" type="text" placeholder="J. Doe" value={name} onChange={handleChange} />
      </FormGroup>{' '}
      <FormGroup validationState={(!emailIsValid && buttonIsClicked) ? 'error' : null}>
        <ControlLabel>Email</ControlLabel>{' '}
        <FormControl name="email" id="email" type="email" placeholder="j.doe@example.com" value={email} onChange={handleChange} />
      </FormGroup>{' '}
      <Button onClick={handleEmailSubscription}>Send</Button>{' '}
      <br /><br />
      <FormGroup>
        <Checkbox name="news" defaultChecked={news} onChange={handleChange}>{' '}I want to receive news about the project</Checkbox>
      </FormGroup>{' '}
    </Form>
  );
}

EmailForm.propTypes = {
  sent: PropTypes.bool,
  name: PropTypes.string,
  nameIsValid: PropTypes.bool,
  email: PropTypes.string,
  emailIsValid: PropTypes.bool,
  buttonIsClicked: PropTypes.bool,
  news: PropTypes.bool,
  handleChange: PropTypes.func,
  handleEmailSubscription: PropTypes.func,
};

export default EmailForm;
