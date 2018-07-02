/*
 * HomePage
 *
 * This is the intro page
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

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <Grid style={gridStyle}>
          <Row>
            <Panel style={panelStyle}>
              <Panel.Body>
                <Panel.Title><h2>Welcome</h2></Panel.Title>
              </Panel.Body>
              <Panel.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat, lectus sit amet fermentum maximus, enim eros rhoncus odio, ac maximus purus nisl tincidunt odio. Pellentesque consequat vehicula velit eu volutpat. Fusce eget est varius est fringilla porttitor. Donec aliquam ipsum mattis leo accumsan commodo. Vivamus justo leo, vulputate non ultricies id, fringilla at nisl. Etiam justo eros, commodo non dignissim nec, dapibus ut augue. Vestibulum dignissim sodales arcu id consectetur.
              </Panel.Body>
              <div className="clearfix">
                <Button style={buttonStyle} className="btn-primary pull-right" href="/experiment">Continue</Button>
              </div>
            </Panel>
          </Row>
        </Grid>
      </div>
    );
  }
}
