/*
 * Survey
 *
 * This is the post-experiment survey, at the '/survey' route
 *
 */

// Libraries
import React from 'react';

// Components
import { Grid, Row, Button, Panel } from 'react-bootstrap';
import Header from 'components/Header';

// Styles
const buttonStyle = {
  margin: '2rem',
};
const gridStyle = {
  marginTop: '-3rem',
};
const panelStyle = {
  padding: '3rem',
};

export default class Survey extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <Grid style={gridStyle}>
          <Row>
            <Panel style={panelStyle}>
              <Panel.Body>
                <Panel.Title><h2>Survey</h2></Panel.Title>
              </Panel.Body>
              <Panel.Body>
                This is the survey.
              </Panel.Body>
              <div className="clearfix">
                <Button style={buttonStyle} className="btn-primary pull-right" href="/thankyou">Finish</Button>
              </div>
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}
