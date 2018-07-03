/**
*
* Instruction
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Grid, Row, Button, Panel } from 'react-bootstrap';

// Styles
import styles from './Instruction.css';

function Instruction(props) {
  return (
    <div>
      <Grid className={styles.grid}>
        <Row>
          <Panel className={styles.panel}>
            <Panel.Body>
              <Panel.Title><h2>Instructions</h2></Panel.Title>
            </Panel.Body>
            <Panel.Body>
              <big>
                Under each item you will find three buttons corresponding to three different
                actions &mdash; <strong>Buy</strong> the item, <strong>Add</strong> to a wishlist
                for later purchase, or if you are not interested in the item and choose none of the above you can <strong>Skip</strong>.
                Please indicate for each of the following items how likely you are to purchase the item
                by choosing the adequate value on a scale ranging from <strong>very unlikely</strong> to <strong>very
                likely</strong>, regardless of the button you have clicked.<br /><br />
                Please answer all questions truthfully and as spontaneously as possible.
              </big>
            </Panel.Body>
            <div className="clearfix">
              <Button onClick={props.handleInstructionClick} className={`btn-primary pull-right ${styles.button}`} href="">Start</Button>
            </div>
          </Panel>
        </Row>
      </Grid>
    </div>
  );
}

Instruction.propTypes = {
  handleInstructionClick: PropTypes.object,
};

export default Instruction;
