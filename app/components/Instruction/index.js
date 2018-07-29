/**
*
* Instruction
*
*/

// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button, Panel } from 'react-bootstrap';
import Scale from 'components/Scale';

// Styles
import styles from './Instruction.css';

function Instruction(props) {
  const handleChangeStep = props.handleChangeStep;
  return (
    <Panel className="panel">
      <Panel.Body>
        <Panel.Title><h2>Instructions</h2></Panel.Title>
      </Panel.Body>
      <Panel.Body>
        Under each item you will find three buttons corresponding to three different
        actions &mdash; you can <Button>Buy</Button> an item, <Button>Add</Button> it to a wish list
        if you would by it later, or if you are not interested in the item you just <Button>Skip</Button> it.<br /><br />

        After you click on a button, you are presented with another choice:
        <Scale className={styles.scale} />

        Please answer all questions truthfully and as spontaneously as possible.
      </Panel.Body>
      <div className="clearfix">
        <Button onClick={handleChangeStep} className={`btn-secondary pull-right ${styles.button}`} href="">Start</Button>
      </div>
    </Panel>
  );
}

Instruction.propTypes = {
  handleChangeStep: PropTypes.func,
};

export default Instruction;
