/**
*
* AuthenticityCheck
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Radio, Button, Grid, Row, Panel, FormGroup } from 'react-bootstrap';

// Styles
import styles from './AuthenticityCheck.css';

class AuthenticityCheck extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonIsShown: false,
    };
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  handleRadioClick() {
    this.setState({
      buttonIsShown: true,
    });
  }

  render() {
    const visibilityStyle = { visibility: this.props.visibility };
    const { buttonIsShown } = this.state;

    return (
      <div>
        <Grid className={styles.grid} style={visibilityStyle}>
          <Row>
            <Panel className={styles.panel}>
              <Panel.Body>
                <Panel.Title><h2>Authenticity Check</h2></Panel.Title>
              </Panel.Body>
              <Panel.Body>
                <form>
                  <label htmlFor="authenticityCheck">Please click on the option that applies to you
                    <FormGroup>
                      <Radio name="authenticityCheck" onClick={this.handleRadioClick} readOnly>I have followed the instructions and my answers are sincere. My data should be submitted.</Radio>
                      <Radio name="authenticityCheck" onClick={this.handleRadioClick} readOnly>I have not followed the instructions and my answers are not sincere. My data should not be submitted.</Radio>
                    </FormGroup>
                  </label>
                </form>
              </Panel.Body>
              <div className="clearfix">
                <Button className={`btn-primary ${styles.button} ${!buttonIsShown ? 'invisible' : null}`} onClick={this.changePage} href="/survey">Next</Button>
              </div>
            </Panel>
          </Row>

        </Grid>
      </div>
    );
  }
}

AuthenticityCheck.propTypes = {
  visibility: PropTypes.string,
};

export default AuthenticityCheck;
