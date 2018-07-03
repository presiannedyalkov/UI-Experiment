/**
*
* Survey
*
*/

// Libraries
import React from 'react';

// Components
import { Grid, Row, Button, Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Header from 'components/Header';
import { isBrowser } from 'react-device-detect';

// Styles
import styles from './Survey.css';

function Survey() {
  return (
    <div>
      <Header />
      <Grid className={styles.grid}>
        <Row>
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
              </form>
            </Panel.Body>
            <div className="clearfix">
              <Button className={`btn-primary pull-right ${styles.button}`} href="/thankyou">Finish</Button>
            </div>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

Survey.propTypes = {

};

export default Survey;
