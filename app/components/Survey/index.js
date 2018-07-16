/**
*
* Survey
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { isBrowser } from 'react-device-detect';

// Styles
import styles from './Survey.css';

function Survey(props) {
  const handleChangeStep = props.handleChangeStep;
  return (
    <Panel className={styles.panel}>
      <Panel.Body>
        <Panel.Title><h2>Survey</h2></Panel.Title>
      </Panel.Body>
      <Panel.Body>
        <form className={styles.form}>
          <FormGroup>
            <label htmlFor="age">Age</label>
            <FormControl name="age" id="age" required type="number" min="10" max="100" placeholder="Enter your age" />
          </FormGroup>
          <FormGroup controlId="gender">
            <ControlLabel>Gender</ControlLabel>
            <FormControl required componentClass="select" placeholder="select">
              <option disabled selected value=""></option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
              <option value="notsay">I&apos;d rather not say</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="device">
            <ControlLabel>Device</ControlLabel>
            <FormControl required componentClass="select" placeholder="select" value={isBrowser ? 'desktop' : 'mobile'}>
              <option value="mobile">mobile</option>
              <option value="desktop">desktop</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <label htmlFor="items">How many items did you buy online in the last 3 months</label>
            <FormControl name="items" id="items" required type="number" min="0" max="1000" placeholder="Number of items" />
          </FormGroup>
        </form>
      </Panel.Body>
      <div className="clearfix">
        <Button className={`btn-secondary pull-right ${styles.button}`} onClick={handleChangeStep} href="">Finish</Button>
      </div>
    </Panel>
  );
}

Survey.propTypes = {
  handleChangeStep: PropTypes.object,
};

export default Survey;
